import './Cart.css';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar } from '../../components/Navbar/Navbar'
import { useCart } from '../../context/cart-context'
import { HorizontalCard } from '../../components/ProductCard/HorizontalCard';
import logo from '../../utilities/PoshShoppe.png'
export const Cart = () =>{
    const { cart,cartDispatch } = useCart();
    const navigate = useNavigate()
    const totalPrice = cart.reduce((acc,curr) => acc + curr.newPrice * curr.quantity, 0)
    const totalOldPrice = cart.reduce((acc, curr) => acc+ curr.oldPrice * curr.quantity, 0)
    console.log(totalPrice)

    const loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src= src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
  
    const displayRazorpay = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
        if(!response){
          console.log({
              open: true,
              message: "Razorpay SDK failed to load",
              type: "error"
          })
        }
  
        const options = {
          key: "rzp_test_trSXg5APd0JXvf",
          amount: totalPrice * 100,
          curreny: "INR",
          name: "PoshShoppe",
          description: "Thank you for shopping with us.",
          image: {logo},
  
          handler: ({payment_id}) => {
              cartDispatch({type: "clearCart"});
              navigate("/")
          },
          prefill: {
            name: 'sadaf khan',
            email: 'sadafkhan0107@gmail.com',
            contact: "9988776655",
          },
        }
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                                <button className='order-btn border-none br-4 button text-space-sm' onClick={displayRazorpay}>PLACE ORDER</button>
                            </div>
                        </div>
                    </main>
                    </>
                ) : (<div>
                <h1>Add items in cart</h1>
                <button className='btn button' onClick={() => navigate('/')}> Click here to add items in Cart</button>
                </div>)}
            </div>
        </Fragment>
        
        
    )
}

