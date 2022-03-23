import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../contenedor/ItemCount";



const ItemDetail = ({ product }) => {

  const [count, setCount] = useState(null)

  const { agregarAlCarrito } = useCartContext()

  const onAdd = cant => {
    setCount(cant)
    agregarAlCarrito({ ...product, cantidad: cant })
  }


  return (

    <div className="row detalleProducto">
      <div className="col">
        <div className="container">
          <h3>{product.title}</h3>
          <img className="img-responsive" src={product.pictureUrl} alt='Foto' />
        </div>
      </div>
      <div className="col textoDetalle">
        <div className="container">
          <p>{product.detalle}</p>
          {count ?
            <div className="container botones">
              <div className="btnCartSeguir">
                <Link to='/'>
                  <Button>Seguir Comprando</Button>
                </Link>
              </div>
              <div className="btnCartSeguir">
                <Link to='/cart'>
                  <Button>Ir al Carro</Button></Link>
              </div>
            </div>
            :

            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>

  )
}

export default ItemDetail