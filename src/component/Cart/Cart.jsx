import { useCartContext } from "../../context/cartContext"

const Cart = () => {
    const { cartList } = useCartContext()
    console.log(cartList)
    return (
        <div>
            {cartList.map(item =>
                <div class="col-md-8" key={item.id}>
                    <div class="cart-item">
                        <div class="cart-item-imagen">
                            <img className="img-responsive" src={item.pictureUrl} alt='Foto' />
                        </div>
                        <div class="cart-item-detalle">
                            <p>{item.title}</p>
                        </div>
                    </div>
                </div>
            )
            }
</div>
    )
}

export default Cart