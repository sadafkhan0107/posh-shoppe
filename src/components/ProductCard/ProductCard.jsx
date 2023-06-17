import { useCart } from '../../context/cart-context';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { findProducts } from '../../utilities/findProducts';

export const ProductCard = ({product}) =>{
  // console.log(product);
  const{id,imgUrl, title, productCategory, oldPrice, newPrice, discount, itemRating} = product;
  const navigate = useNavigate();
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
  
    return(
        <div className="card-container">
      <div className='image-container relative'>
        <img className='img' src={imgUrl} alt={productCategory}/>
        <button className='absolute top-0 right-0'> <span className="material-icons-outlined">favorite_border</span> </button>
      </div>
      <div className='card-details' onClick={handleClick}>
        <p>{title}</p>
        <p>{productCategory}</p>
        <div className='price-container'>
          <div>Rs.{newPrice} </div> 
          <div className='old-price'>Rs. {oldPrice}</div> 
          <div>({discount}%) Off</div>
        </div>
        <p>
          {itemRating}
          <span className="material-icons-outlined">star_outline</span>
        </p>
      </div>
      <div className='cta'>
        <button className='cart-btn' onClick={handleAddToCartClick}><span className="material-icons-outlined">shopping_cart</span>
        <span> {isInCart ? "Go to Cart" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
    )
}