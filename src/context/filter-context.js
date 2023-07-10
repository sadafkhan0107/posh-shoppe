import { useContext, createContext, useReducer } from "react";
import {discountReducer} from '../reducer/discountReducer';

const FilterContext = createContext();

const FilterProvider =({children}) => {
    const initialState = {
        price: 40000,
        category: "all",
        sortBy:"",
        rating: 0,
        discount : 0,
        isIncludeOutOfStock : false,
        isFastDelivery : "",
        searchInput: "",
    }

    const[{price, category, sortBy, rating, discount,isIncludeOutOfStock,isFastDelivery,searchInput},dispatch] = useReducer(discountReducer, initialState);
 return (
     <FilterContext.Provider value={{price, category, sortBy, rating, discount,isIncludeOutOfStock,isFastDelivery,searchInput,dispatch}}>
       {children}
     </FilterContext.Provider>
   )
}

const useFilter =() => useContext(FilterContext)

export {useFilter, FilterProvider}