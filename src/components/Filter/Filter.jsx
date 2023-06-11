import './Filter.css';
import { useFilter } from '../../context/filter-context/filter-context';
export const Filter=()=>{

const {price, dispatch} = useFilter();

  const handleDiscountChange=(e)=>{
    dispatch({
      type:"discount",
      payload: e.target.value
    })
  }
  const handleRatingChange = (e) =>{
   dispatch({
     type: "rating",
     payload : e.target.value
    })
  }
  const handleCategoryChange = (e) =>{
    dispatch({
      type: "category",
      payload : e.target.value
    })
  }
  const handleSortByChange = (e) =>{
    dispatch({
      type: "sortBy",
      payload : e.target.value
    })
  }
  const handlePriceChange = (e) =>{
    dispatch({
      type: "price",
      payload: e.target.value
    })
  }
  const handleFastDeliveryChange = (e) =>{
    dispatch({
      type : "isFastDelivery",
      payload : e.target.checked
    })
  }
  const handleIncludeOutOfStockChange = (e) =>{
    dispatch({
      type: "isIncludeOutOfStock",
      payload: e.target.checked
    })
  }
  const handleClearClick = (e) =>{
    dispatch({
      type : "clear"
    })
  }
    return(
        <aside className='filter'> 
      <div className='nav-filter'>
      <div >Filter</div>
      <div ><button onClick={handleClearClick}>clear</button></div>
        </div> 
        <div className='price-filter'>
          <h3>Price</h3>
          <div className='price-range'>
            <span> 1k </span>
            <span> 2k </span>
            <span> 3k </span>
            <span> 4k </span>
          </div>
          <input className='slider' type="range" min="1000" step="1000" max="4000" value={price} onChange={handlePriceChange}/>
        </div><br />
        <div className='category-filter'>
          <h4>Category</h4>
          <div className='filter-list'>
            <label>
              <input className='check-box' type='radio' name="category" value="all" onChange={handleCategoryChange}/>
              All
            </label>
          </div>
          <div className='filter-list'>
            <label>
              <input className='check-box' type='radio' name="category"  value="men" onChange={handleCategoryChange}/>
              Men
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' name="category"  value="women" onChange={handleCategoryChange}/>
              Women
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' name="category"  value="boys" onChange={handleCategoryChange}/>
              Boys
            </label>
          </div>
          <div className='filter-list'>
          <label>
              <input className='check-box' type='radio' name="category"  value="girls" onChange={handleCategoryChange}/>
              Girls
            </label>
          </div>
        </div> <br />
        <div className='sortby-filter'>
            <h3>Sort by</h3>
            <div className='filter-list low-to-high'>
            <label>
              <input className='check-box' type='radio' name="sortByPrice" value='lowToHigh' onChange={handleSortByChange}/>
              Price - Low to High
            </label>
            </div>
            <div className='filter-list high-to-low'>
            <label>
              <input className='check-box' type='radio' name='sortByPrice' value='highToLow' onChange={handleSortByChange}/>
              Price - High to Low
            </label> 
            </div>
        </div><br />
        <div className='rating-filter'>
            <h3>Rating</h3>
            <div className='filter-list star4'>
            <label>
              <input className='check-box' type='radio' name='rating' value="4" onChange={handleRatingChange}/>
              4 stars and above
            </label>
            </div>
            <div className='filter-list star3'>
            <label>
              <input className='check-box' type='radio'name='rating' value="3" onChange={handleRatingChange}/>
              3 stars and above
            </label>
            </div>
            <div className='filter-list star2'>
            <label>
              <input className='check-box' type='radio' name='rating' value="2" onChange={handleRatingChange}/>
              2 stars and above
            </label>
            </div>
            <div className='filter-list star1'>
            <label>
              <input className='check-box' type='radio' name='rating' value="1" onChange={handleRatingChange}/>
              1 stars and above
            </label>
            </div>
        </div> <br />
        <div className='discount-filter'>
            <h3>Discount</h3>
            <div className=' filter-list fifty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="50" onChange={handleDiscountChange}/>
              50% and above
            </label>
            </div>
            <div className='filter-list thirty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="30" onChange={handleDiscountChange}/>
              30% and above
            </label>
            </div>
            <div className='filter-list twenty'>
            <label>
              <input className='check-box' type='radio' name='discount' value="20" onChange={handleDiscountChange}/>
              20% and above
            </label>
            </div>
        </div> <br />
        <div className='additional-filter'>
            <h3>Additional Filters</h3>
            <div className='filter-list outofstock'>
            <label>
              <input className='check-box'type='checkbox' onChange={handleIncludeOutOfStockChange}/>
              Include Out of Stock
            </label>
            </div>
            <div className='filter-list fast-delivery' >
            <label>
              <input className='check-box' type='checkbox' onChange={handleFastDeliveryChange}/>
              Fast Delivery
            </label>
            </div>
        </div>
    </aside>
    )
}
