import { createContext, useContext, useState } from 'react'

const cartContext = createContext();

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}) {
    const[cartList, setCartList] = useState([])

    const agregarAlCarrito = (item) =>{
        setCartList([ ...cartList, item])
    }

    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider