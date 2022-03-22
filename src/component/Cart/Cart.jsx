import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import './cart.css'

const Cart = () => {
    const { cartList, limpiarCart, clearProd } = useCartContext()
    

return (
    <div>
        <div className="container">
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
                                <p>$ {item.cantidad}</p>
                            </div>
                            <div className="cart-item-clear">
                            <Button variant="danger" onClick={() => clearProd(item.id)}>x</Button>
                            </div>
                        </div>

                    )
                    }
                </div>
                <div className="col-md-4">
                {cartList.length === 0 ? <Link to='/'>
        <Button variant="success">Volver a Comprar</Button></Link>
              :
               <Button variant="danger" onClick={limpiarCart}>VaciarCarrto</Button>
             }
                </div>
            </div>
        </div>
    </div>
)
}

export default Cart