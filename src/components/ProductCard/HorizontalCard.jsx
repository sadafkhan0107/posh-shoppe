import './HorizontalCard.css';
import { useCart } from "../../context/cart-context";
import { findProducts } from "../../utilities/findProducts";
import { useWishlist } from '../../context/wishlist-context';

export const HorizontalCard = ({product, ctaBtns}) =>{
    const {cart, cartDispatch} = useCart()
    const {wishlist, wishlistDispatch} = useWishlist();
    const{id,imgUrl, title, productCategory, oldPrice, newPrice, discount, itemRating} = product;
    const isInCart = findProducts(cart, id)
    const handleFirstBtnClick = () => {
        if(ctaBtns[0] === 'Add to Cart'){
            // wishlist
            // remove from wishlist
            // move to cart
            const isInCart = findProducts(cart, id)
            if(!isInCart){
                cartDispatch({
                  type : "cart",
                  payload : product
                })
              }
        }
        else{
            // cart
            // remove from cart
        }
    }
    const handleSecondBtnClick = () => {
        if(ctaBtns[1] === 'Remove from Wishlist'){
            // wishlist
            // remove from wishlist
        }
        else{
            // cart
            // remove from cart
            // move to wishlist
            const isInWishlist = findProducts(wishlist, id)
            if(!isInWishlist){
                wishlistDispatch({
                  type: "wishlist",
                  payload: product
                })
              }
        }
    }
    return (
        <div className="horizontal-container d-flex">
                <div className="hr-image-container">
                <img className='hr-img' src={imgUrl} alt={productCategory}/>
                </div>
                <div className="hr-prod-desc-container">
                <p>{title}</p>
            <p>{productCategory}</p>
            <div className='hr-price-container'>
            <div>Rs.{newPrice} </div> 
            <div className='hr-old-price'>Rs. {oldPrice}</div> 
            <div>({discount}%) Off</div>
            </div>
            <p>
            {itemRating}
            <span className="material-icons-outlined">star_outline</span>
            </p>
            </div>
            <div className="hr-cta-btn-container">
                <button className='hr-btn' >{ctaBtns[0]}</button>
                <button className='hr-btn' >{ctaBtns[1]}</button>
            </div>
        </div>


        // <div className="card-container">
        //     <div className='image-container relative'>
        //         <img className='img' src={imgUrl} alt={productCategory}/>
        //         <button className='absolute top-0 right-0'> 
        //         <span className="material-icons-outlined">favorite_border</span> 
        //         </button>
        //     </div>
        //     <div className='card-details'>
        //         <p>{title}</p>
        //         <p>{productCategory}</p>
        //         <div className='price-container'>
        //             <div>Rs.{newPrice} </div> 
        //             <div className='old-price'>Rs. {oldPrice}</div> 
        //             <div>({discount}%) Off</div>
        //         </div>
        //         <p>
        //         {itemRating}
        //         <span className="material-icons-outlined">star_outline</span>
        //         </p>
        //     </div>
        //     <div className='cta'>
        //         <button className='cart-btn'><span className="material-icons-outlined">shopping_cart</span>
        //         <span> {isInCart ? "Go to Cart" : "Add to Cart"}</span>
        //         </button>
        //     </div>
        //  </div>
    )
}