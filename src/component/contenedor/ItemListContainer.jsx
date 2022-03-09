import React from 'react'
import { useState, useEffect } from 'react';
import prodList from '../../helpers/productos';
import Preload from '../Items/preload';
import ItemList from '../Items/ItemList'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    prodList
      .then((resp) => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

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
