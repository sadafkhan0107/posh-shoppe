export const findProducts =(products, id) =>{
    return products?.length > 0 && products.some((product) => product.id === id)
}