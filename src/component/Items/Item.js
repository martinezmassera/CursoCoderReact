import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css'

function onClick(evt){
  evt.stopPropagation();
}

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
        <Link className="btnDetalle"  onClick={ onClick } to={`../detalle/${prod.id}`}>Detalle</Link>
        </Card.Body>
    </Card>
  </div>
    )
}

export default Item