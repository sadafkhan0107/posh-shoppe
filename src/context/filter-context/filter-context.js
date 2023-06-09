import { useContext, createContext, useReducer } from "react";
import {discountReducer} from '../../reducer/discountReducer/discountReducer';

const minPrice= 0;
const FilterContext = createContext();

const FilterProvider =({children}) => {
    const initialState = {
        price: minPrice,
        category: "",
        sortBy:"",
        rating: 0,
        discount : 0
    }

    const[{price, category, sortBy, rating, discount},dispatch] = useReducer(discountReducer, initialState);
 return (
     <FilterContext.Provider value={{price, category, sortBy, rating, discount,dispatch}}>
       {children}
     </FilterContext.Provider>
   )
}

const useFilter =() => useContext(FilterContext)

export {useFilter, FilterProvider}