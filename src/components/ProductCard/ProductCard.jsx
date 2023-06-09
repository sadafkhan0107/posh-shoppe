import './ProductCard.css';

export const ProductCard = ({product}) =>{
  // console.log(product);
  const{imgUrl, title, productCategory, oldPrice, newPrice, discount, itemRating} = product;
    return(
        <div className="card-container">
      <div className='image-container'>
        <img className='img' src={imgUrl} alt={productCategory}/>
      </div>
      <div className='card-details'>
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
        <button className='cart-btn'><span className="material-icons-outlined">shopping_cart</span>
        <span>Add to Cart</span></button>
      </div>
    </div>
    )
}