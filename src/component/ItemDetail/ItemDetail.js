import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../contenedor/ItemCount";



const ItemDetail = ({product}) => {

  const[count, setCount] = useState (null)
  
  const onAdd = cant =>{
    setCount(cant)
  }

  return(
<div className="row detalleProducto">
  <div className="col">
      <div className="container">
          <h3>{product.title}</h3>
          <img className="img-responsive" src={product.pictureUrl} alt='Foto'/>
      </div>
  </div>
  <div className="col textoDetalle">
      <div className="container">
      <p>{product.detalle}</p>
      {count ?
       <Link to='/cart'>
        <Button>Ir al Carro</Button></Link>
        :
       
      <ItemCount initial = {1} stock = {product.stock} onAdd={onAdd} />
      }
      </div>
  </div>
</div>
  )
}

export default ItemDetail