import './Cart.css';
import { Fragment } from 'react';
import {Navbar } from '../../components/Navbar/Navbar'
import { useCart } from '../../context/cart-context'
import { HorizontalCard } from '../../components/ProductCard/HorizontalCard';
export const Cart = () =>{
    const { cart } = useCart();
    const totalPrice = cart.reduce((acc,curr) => acc + curr.newPrice * curr.quantity, 0)
    const totalOldPrice = cart.reduce((acc, curr) => acc+ curr.oldPrice * curr.quantity, 0)
    console.log(totalPrice)
    return (
        <Fragment>
            <Navbar />
            <div className='cart-prods-container page'>
                {cart.length > 0 ? (
                    <>
                    <h1 className='myCart'>My Cart</h1>
                    <main className='cart d-flex gap-l'>
                        <div className='cart-products d-flex d-column gap-l'>
                            {
                            cart?.length > 0 && cart.map(product => <HorizontalCard key={product.id} product={product} />)
                            }
                        </div>
                        <div className='amount-container d-flex d-column gap-m'>
                            <h3 className='h3 br-bt'> Price Details </h3>
                            <div className='d-flex text-space-sm space-between'>
                                <span> Price ({cart.length} items)</span>
                                <span>Rs {totalOldPrice}</span>
                            </div>
                            <div className='d-flex text-space-sm space-between'>
                                <span>Discount </span>
                                <span> - Rs. {totalOldPrice-totalPrice}</span>
                            </div>
                            <div className='d-flex text-space-sm space-between'>
                                <span>Delivery Charge</span>
                                <span>Rs 150 </span>
                            </div>
                            <div className='total-price d-flex text-space-sm space-between'>
                                <span>Total Price</span>
                                <span>Rs. {totalPrice+150}</span>
                            </div>
                            <div className='text-space-sm'>
                                <span>You will save Rs. {totalOldPrice-totalPrice} on this order</span>
                            </div>
                            <div className='d-flex align-center justify-center'>
                                <button className='order-btn border-none br-4 button text-space-sm'>PLACE ORDER</button>
                            </div>
                        </div>
                    </main>
                    </>
                ) : (<>
                <h1>Add items in cart</h1>
                </>)}
            </div>
        </Fragment>
        
        
    )
}

