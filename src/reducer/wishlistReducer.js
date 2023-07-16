export const wishlistReducer =(state, {type, payload})=>{
    switch(type){
        case 'wishlist': 
            return {...state, wishlist: [...state.wishlist, payload]}

        case 'remove from wishlist':
            return {...state, wishlist: state.wishlist.filter((prod) => prod.id !== payload.id)}
        default:
            return state
    }
}