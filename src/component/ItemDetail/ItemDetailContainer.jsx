import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Preload from '../Items/preload'
import {getFirestore, getDoc, doc}  from "firebase/firestore"
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProducto } = useParams()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore()
        const queryDetalle = doc(db, 'items', idProducto)   
        
        getDoc(queryDetalle)
        .then(resp => setProduct(  { id: resp.id, ...resp.data()} ))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))            
       
    }, [idProducto])

    return (
        <>

            {loading ?
                <Preload />
                :
                <ItemDetail product={product} />
            }
        </>

    )
}

export default ItemDetailContainer