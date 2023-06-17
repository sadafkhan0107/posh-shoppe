export const cartReducer =(state, {type,payload}) =>{
    switch(type){
        case "cart":
            return {...state, cart: [...state.cart, payload]}
        default:
            return state
    }
}