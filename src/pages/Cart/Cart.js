import { Fragment } from 'react';
import {Navbar } from '../../components/Navbar/Navbar'
import { useCart } from '../../context/cart-context'
export const Cart = () =>{
    const { cart } = useCart();
    console.log(cart);
    return (
        <Fragment>
            <Navbar />
            <div className='cart-prods-container'>
                {cart.length > 0 ? (
                    <>
                    <h1>My Cart</h1>
                    
                    </>
                ) : (<>
                <h1>Add items in cart</h1>
                </>)}
            </div>
        </Fragment>
        
        
    )
}