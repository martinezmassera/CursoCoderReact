import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preload from '../Items/preload';
import ItemList from '../Items/ItemList'
import Container from 'react-bootstrap/Container';
import {collection, getFirestore, getDocs, query, where}  from "firebase/firestore"
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const{catProducto} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')   
    const queryFilter = !catProducto ?
    queryCollection
    :
    query(queryCollection, where('tipo', '==', catProducto))
    getDocs(queryFilter)
    .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))            
               
}, [catProducto])



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
