import { useContext, createContext, useReducer } from "react";
import {discountReducer} from '../../reducer/discountReducer/discountReducer';

const FilterContext = createContext();

const FilterProvider =({children}) => {
    const initialState = {
        price: 4000,
        category: "all",
        sortBy:"",
        rating: 0,
        discount : 0,
        isIncludeOutOfStock : false,
        isFastDelivery : ""
    }

    const[{price, category, sortBy, rating, discount,isIncludeOutOfStock,isFastDelivery},dispatch] = useReducer(discountReducer, initialState);
 return (
     <FilterContext.Provider value={{price, category, sortBy, rating, discount,isIncludeOutOfStock,isFastDelivery,dispatch}}>
       {children}
     </FilterContext.Provider>
   )
}

const useFilter =() => useContext(FilterContext)

export {useFilter, FilterProvider}