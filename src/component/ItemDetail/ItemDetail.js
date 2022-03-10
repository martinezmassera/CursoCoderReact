import ItemCount from "../contenedor/ItemCount"
const ItemDetail = ({product}) => {
  return(
<div className="row">
<div className="col">
    <div className="container">
        <h3>{product.title}</h3>
        <img src={product.pictureUrl} alt='Foto'/>
    </div>
</div>
<div className="col">
    <div className="container">
    <p>{product.detalle}</p>
<ItemCount initial = {1} stock = {product.stock}/>
</div>
</div>
</div>
  )
}

export default ItemDetail