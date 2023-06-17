import { useContext,createContext,useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({children}) =>{
   const[{wishlist}, wishlistDispatch] = useReducer(wishlistReducer, {wishlist:[]})
   return(
    <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
        {children}
    </WishlistContext.Provider>
   )
}


const useWishlist =()=> useContext(WishlistContext);

export {useWishlist, WishlistProvider}