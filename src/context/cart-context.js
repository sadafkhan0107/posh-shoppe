import { useContext,createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [{cart}, cartDispatch] = useReducer(cartReducer, {cart: []})
    return(
    <CartContext.Provider value={{cart,cartDispatch}}>
        {children}
    </CartContext.Provider>
    )
}


const useCart = () => useContext(CartContext)

export {useCart , CartProvider}