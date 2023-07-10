export const wishlistReducer =(state, {type, payload})=>{
    switch(type){
        case 'wishlist': 
            return {...state, wishlist: [...state.wishlist, payload]}
        default:
            return state
    }
}