import { useState } from 'react';
import './HorizontalCard.css';
import {useCart} from '../../context/cart-context';
import {useWishlist} from '../../context/wishlist-context';
import { findProducts } from '../../utilities/findProducts';

export const HorizontalCard = ({product}) =>{
    const{id,imgUrl, title, productCategory, oldPrice, newPrice, discount, itemRating} = product;
    const {cart, cartDispatch} = useCart();
    const {wishlist, wishlistDispatch} = useWishlist();
    const handleIncrement = () => {
        cartDispatch({
            type: 'incQuantity',
            payload: product
        })
    }
    const handleDecrement = () => {
        if(product.quantity > 1)
            cartDispatch({
                type: 'decQuantity',
                payload: product
            })
    }
    
    const isInWishlist = findProducts(wishlist, id)
    const handleMoveWishlist = () => {
        if(!isInWishlist){
            wishlistDispatch({
              type: "wishlist",
              payload: product
            })
            cartDispatch({
                type: "remove from cart",
                payload: product
            })
          }
    }

    const handleRemoveCart = () =>{
        cartDispatch({
            type: "remove from cart",
            payload: product
        })
    }
    return (
        <div className="horizontal-container d-flex gap-m">
            <div className="hr-image-container">
                <img className='hr-img' src={imgUrl} alt={productCategory}/>
            </div>
            <div className="hr-prod-desc-container d-flex d-column gap-s">
                <p>{title}</p>
                <p>{productCategory}</p>
                <div className='hr-price-container d-flex gap-s'>
                   <span className='hr-new-price'>Rs.{newPrice} </span> 
                   <span className='hr-old-price'>Rs. {oldPrice}</span> 
                   <span className='hr-discount'>({discount}%) Off</span>
                </div>
                <p className='d-flex gap-s align-center'>
                   <span className='hr-item-rating'>{itemRating}</span>
                   <span className="material-icons-outlined star-color">star</span>
                </p>
                <p className='d-flex gap-s align-center'>
                   <button className='count-btn font-1rem' onClick={handleDecrement}> - </button>
                   <button className='count-btn count'>{product.quantity}</button>
                   <button className='count-btn font-1rem' onClick={handleIncrement}> + </button>
                </p>
                <div className='d-flex gap-s'>
                   <button className='hr-btn d-flex align-center justify-center br-4 border-none' onClick={handleMoveWishlist}>Move to wishlist</button>
                   <button className='hr-btn d-flex align-center justify-center br-4 border-none' onClick={handleRemoveCart}>Remove from Cart</button>
                </div>
            </div>     
        </div>
    )
}