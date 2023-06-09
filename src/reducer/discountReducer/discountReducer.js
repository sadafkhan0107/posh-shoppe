export const discountReducer =(state,{type,payload}) =>{
switch(type){
    case "discount" : 
     return {...state, discount: payload};
     case "rating" :
        return {...state, rating: payload}
    default:
        return state;
}
}