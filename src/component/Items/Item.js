import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ItemCount from '../contenedor/ItemCount';
import Preload from './preload';

const Item = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      ItemList
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
  
  
    
  return (
    <div>
    <Container>
      <div className='row row-cols-1 row-cols-lg-4 pb-5 justify-content-md-center' >
        {loading ? <Preload />
          :
          productos.map((prod) => <div
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
      </div>
    </Container>
    </div>
  )
}

export default Item