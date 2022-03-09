import { useEffect, upeState } from 'react';
import prodList from '../../helpers/productos';

const ItemDetailContainer = () => {
const [productos, setProducto] = uPestate({})
    useEffect(() => {
        prodList
            .then(resp => setProducto(resp.find(prod => prod.id === 1)))
    }, [])
console.log(productos)
    return (
        <></>
    )
}

export default ItemDetailContainer