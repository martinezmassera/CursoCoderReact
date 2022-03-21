import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import prodList from '../../helpers/productos';
import Preload from '../Items/preload'
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const{idProducto} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        prodList
            .then(resp => setProduct(resp.find(prod => prod.id === idProducto)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    })
  
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