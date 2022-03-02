import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Imagen from '../CartWidget/CartWidget';
import getFetch from './getfetch';
import './ItemListContainer.css';

const ItemListContainer = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch// llamada a la api
      .then((respuesta) => {
        return respuesta
      })
      .then((resp) => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])


  const sumauno = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const restauno = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const agregar = () => {
    onAdd(count)
  }

  return (
    <div>

      <Container>
        <div className='row row-cols-1 row-cols-lg-4 pb-5 justify-content-md-center' >
          {loading ? <h1>Cargando...</h1>
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
                  <Button variant="outline-secondary" onClick={restauno}> - </Button>
                  <label className="cantidadAgregar" id={prod.id}> {count} </label>
                  <Button variant="outline-secondary" onClick={sumauno}> + </Button>
                  <Button variant="outline-secondary" onClick={agregar}> <Imagen /></Button>
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


export default ItemListContainer