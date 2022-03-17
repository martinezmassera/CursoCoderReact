import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import prodList from '../../helpers/productos';
import Preload from '../Items/preload';
import ItemList from '../Items/ItemList'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const{catProducto} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (catProducto) {
      prodList
      .then(resp => setProductos(resp.filter(prod => prod.tipo === catProducto)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
      } else {   
      prodList
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  },[catProducto])

  console.log(productos)


  return (
    <>
      <div>
        <Container>
          <div className='row row-cols-1 row-cols-lg-4 pb-5 justify-content-md-center' >
            {loading ? <Preload />
              :
              <ItemList productos={productos} />
             }
           </div>
        </Container>
      </div>
    </>
  )
}

export default ItemListContainer
