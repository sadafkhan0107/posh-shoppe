import { Fragment } from 'react';
import {Navbar } from '../../components/Navbar/Navbar'
import { useCart } from '../../context/cart-context'
import { HorizontalCard } from '../../components/ProductCard/HorizontalCard';
export const Cart = () =>{
    const { cart } = useCart();
    console.log(cart);
    return (
        <Fragment>
            <Navbar />
            <div className='cart-prods-container page'>
                {cart.length > 0 ? (
                    <>
                    <h1>My Cart</h1>
                    <main className='products-container'>
                       {
                         cart?.length > 0 && cart.map(product => <HorizontalCard key={product.id} product={product} ctaBtns = {['Remove from Cart' , 'Move to Wishlist']}/>)
                         }
                    </main>
                    </>
                ) : (<>
                <h1>Add items in cart</h1>
                </>)}
            </div>
        </Fragment>
        
        
    )
}

