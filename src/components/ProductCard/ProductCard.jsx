import './ProductCard.css';
import { useCart } from '../../context/cart-context';
import { useNavigate,useLocation } from 'react-router-dom';
import { findProducts } from '../../utilities/findProducts';
import { useWishlist } from '../../context/wishlist-context';

export const ProductCard = ({product}) =>{
  const{id,imgUrl, title, productCategory, oldPrice, newPrice, discount, itemRating} = product;
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () =>{
    navigate(`/product/${id}`)
  }
  const {cart, cartDispatch} = useCart()
  const isInCart = findProducts(cart, id)
  const handleAddToCartClick=()=>{
    if(!isInCart){
      cartDispatch({
        type : "cart",
        payload : product
      })
    }
    navigate('/cart')
  }
  
  const {wishlist, wishlistDispatch} = useWishlist();
  const isInWishlist = findProducts(wishlist, id)
  const handleWishlistClick = () =>{
    if(location.pathname === '/'){
      if(!isInWishlist){
        wishlistDispatch({
          type: "wishlist",
          payload: product
        })
      }
    }
    else{
      wishlistDispatch({
        type: "remove from wishlist",
        payload: product
      })
    }
  }
    return(
        <div className="card-container br-4">
      <div className='image-container relative-pos'>
        <img className='img' src={imgUrl} alt={productCategory}/>
        <button className='absolute top-0 right-0' onClick={handleWishlistClick}>
          {location.pathname === "/wishlist" ? 
          <span class="material-icons-outlined">close</span> : 
          <span className= {`${isInWishlist? 'favorite' : ''} material-icons-outlined`}> {isInWishlist ? 'favorite' : 'favorite_border'}</span> 
          }
           
           
        </button>
      </div>
      <div className='card-details d-flex d-column gap-s' onClick={handleClick}>
          <p className='prod-title'>{title}</p>
          <p className='prod-category'>{productCategory}</p>
          <div className='price-container'>
            <span className='prod-new-price'>Rs. {newPrice} </span> 
            <span className='prod-old-price'>Rs. {oldPrice}</span> 
            <span className='prod-discount'>({discount}%) Off</span>
          </div>
          <p className='d-flex gap-s align-center'>
            <span className='prod-item-rating'> {itemRating}</span>
            <span className="material-icons-outlined star-color">star</span>
          </p>
      </div>
      <div className='cta '>
        <button className='cart-btn d-flex align-center gap-m justify-center br-4 border-none font-1rem' onClick={handleAddToCartClick}>
          <span className="material-icons-outlined">shopping_cart</span>
          <span className='text-space-sm'> {isInCart ? "Go to Cart" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
    )
}