import { Badge } from "react-bootstrap"
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../context/cartContext"


function Imagen() {
    const { productosTotal } = useCartContext()
    return (
        <div>
            {productosTotal() === 0 ?
                <BsCart3 />
                :
                <div>
                    <BsCart3 /> <Badge bg="secondary">{productosTotal()}</Badge>
                </div>
            }
        </div>




    )

}

export default Imagen