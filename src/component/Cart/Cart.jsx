import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import './cart.css'

const Cart = () => {
    const { cartList, limpiarCart, clearProd, sumaTotal } = useCartContext()
    const [dataForm, setDataForm] = useState({
        mail: '',
        telefono: '',
        nombre: ''
    })

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const GenerarCompra = (e) => {
        e.preventDefault()

        let compra = {}

        compra.buyer = dataForm;
        compra.total = sumaTotal();
        compra.item = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const cantidad = cartItem.cantidad

            return { id, title, cantidad }
        })
        const db = getFirestore()
        const queryCollection = collection(db, 'compras')
        addDoc(queryCollection, compra)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally()

        limpiarCart()
    }


    return (
        <div>
            <div className="container-fluid containerCart">
            
                {cartList.length === 0 ?
                    <div className="row">
                        <div className="col-md-12" >
                            <h2>Tú carrito está vacio</h2>
                            <Link to='/'>
                                <Button variant="success">Volver a Comprar</Button></Link>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-8" >



                            {cartList.map(item =>
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-item-imagen">
                                        <img className="img-responsive" src={item.pictureUrl} alt='Foto' />
                                    </div>
                                    <div className="cart-item-detalle">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="cart-item-cant">
                                        <label> {item.cantidad}</label>
                                    </div>
                                    <div className="cart-item-clear">
                                        <Button variant="danger" onClick={() => clearProd(item.id)}>x</Button>
                                    </div>
                                </div>

                            )
                            }
                        </div>
                        <div className="col-md-4 checkOut" >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type='text'
                                        name='nombre'
                                        placeholder='nombre'
                                        onChange={handleChange}
                                        value={dataForm.nombre} />
                                    <Form.Label>Telefono/Celular</Form.Label>
                                    <Form.Control type='number'
                                        name='telefono'
                                        placeholder='telefono'
                                        onChange={handleChange}
                                        value={dataForm.telefono} />
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control type='email'
                                        name='mail'
                                        placeholder='mail'
                                        onChange={handleChange}
                                        value={dataForm.mail} />
                                </Form.Group>
                                {dataForm.nombre === '' || dataForm.telefono === '' || dataForm.mail === '' ?
                                    <p>Por Favor completar todos los datos para procesar la compra</p>
                                    :
                                    <Button variant="danger" onClick={GenerarCompra}>
                                        Generar Compra
                                    </Button>
                                }
                                <Button variant="danger" onClick={limpiarCart}>VaciarCarrto</Button>

                            </Form>
                            <p><strong>$ {sumaTotal()} </strong></p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart