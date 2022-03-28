import { createContext, useContext, useState } from 'react'


const cartContext = createContext();

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])


    const agregarAlCarrito = (item) => {
        const index = cartList.map(prod => prod.id).indexOf(item.id)
        if (index === -1) {
            setCartList([...cartList, item])
        } else {
            const cant = cartList[index].cantidad
            cartList[index].cantidad = item.cantidad + cant
            const newCartList = [...cartList]
            setCartList(newCartList)
        }
    }

    const limpiarCart = () => {
        setCartList([])
    }

    const clearProd = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const productosTotal = () => {
        return cartList.reduce((acumulado, cartList) => acumulado + cartList.cantidad, 0)

    }

    const sumaTotal = () => {
        return cartList.reduce((acumulado, cartList) => acumulado + (cartList.cantidad * cartList.price), 0)

    }


    

    return (
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            limpiarCart,
            clearProd,
            productosTotal,
            sumaTotal
        }}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider