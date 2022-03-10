import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../contenedor/ItemCount';
import '../ItemDetail/ItemDetail.css'


function Item({prod}) {
  return (
  <div
    className='col m-2'
  >
    <Card >
      <Card.Img variant="top" src={prod.pictureUrl} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          <strong>$ {prod.price}</strong>
        </Card.Text>
        <Link className="btnDetalle"  to={`../detalle/${prod.id}`}>Detalle</Link>
        <ItemCount initial = {1} stock = {prod.stock}/>
        </Card.Body>
    </Card>
  </div>
    )
}

export default Item