export const cartReducer =(state, {type,payload}) =>{
    switch(type){
        case "cart":
            return {...state, cart: [...state.cart, {...payload, quantity: 1}]}

        case "remove from cart":
            return {...state, cart: state.cart.filter((product) => product.id !== payload.id)}

        case 'incQuantity':
            return {...state, cart : state.cart.map((prod) => prod.id === payload.id ? ({...prod, quantity: prod.quantity+1}) : prod)}

        case 'decQuantity':
            return {...state, cart : state.cart.map((prod) => prod.id === payload.id ? ({...prod, quantity: prod.quantity-1}) : prod)}

        case 'clearCart':
            return {...state, cart:[]}
        default:
            return state
    }
}