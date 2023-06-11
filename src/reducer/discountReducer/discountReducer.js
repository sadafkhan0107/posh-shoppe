export const discountReducer =(state,{type,payload}) =>{
switch(type){
    case "discount" :
        return {...state, discount: payload};
    case "rating" :
        return {...state, rating: payload}
    case "category" :
        return {...state, category: payload} 
    case "sortBy" :
        return {...state, sortBy: payload}
    case "price" :
        return {...state, price: payload}
    case "isFastDelivery" :
        return {...state, isFastDelivery: payload}
    case "isIncludeOutOfStock" :
        return {...state, isIncludeOutOfStock: payload}
    case "clear" :
        return{price: 4000,
            category: "all",
            sortBy:"",
            rating: 0,
            discount : 0,
            isIncludeOutOfStock : false,
            isFastDelivery : ""}
    default:
        return state;
}
}