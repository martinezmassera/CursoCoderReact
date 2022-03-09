import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../contenedor/ItemCount';

function Item({prod}) {
  return (
  <div
    key={prod.id}
    className='col m-2'
  >
    <Card >
      <Card.Img variant="top" src={prod.pictureUrl} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          <strong>$ {prod.price}</strong>
        </Card.Text>
        <ItemCount initial = {1} stock = {prod.stock}/>
        </Card.Body>
    </Card>
  </div>
    )
}

export default Item