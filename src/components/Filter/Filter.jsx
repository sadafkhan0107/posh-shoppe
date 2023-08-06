import './Filter.css';
import { useFilter } from '../../context/filter-context';
export const Filter=()=>{

const {price,category, sortBy, rating, discount,isIncludeOutOfStock,isFastDelivery,searchInput, dispatch} = useFilter();

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
        <aside className='filter text-space-sm'> 
      <div className='nav-filter d-flex align-center'>
        <h3 className='h3 '>Filter</h3>
        <div >
          <button className='clear-btn text-space-sm' onClick={handleClearClick}>clear</button>
        </div>
      </div> 
        <div className='price-filter'>
          <h3 className='h3'>Price</h3>
          <div className='price-range'>
            <span> 1k </span>
            <span> 2k </span>
            <span> 3k </span>
            <span> 4k </span>
          </div>
          <input className='slider' type="range" min="1000" step="1000" max="4000" value={price} onChange={handlePriceChange}/>
        </div><br />
        <div className='category-filter'>
          <h3 className='h3'>Category</h3>
          <div className='filter-list'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={category === 'all'} name="category" value="all" onChange={handleCategoryChange}/>
              All
            </label>
          </div>
          <div className='filter-list'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={category === 'men'} type='radio' name="category"  value="men" onChange={handleCategoryChange}/>
              Men
            </label>
          </div>
          <div className='filter-list'>
          <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={category === 'women'} type='radio' name="category"  value="women" onChange={handleCategoryChange}/>
              Women
            </label>
          </div>
          <div className='filter-list'>
          <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={category === 'boys'} type='radio' name="category"  value="boys" onChange={handleCategoryChange}/>
              Boys
            </label>
          </div>
          <div className='filter-list'>
          <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={category === 'girls'} type='radio' name="category"  value="girls" onChange={handleCategoryChange}/>
              Girls
            </label>
          </div>
        </div> <br />
        <div className='sortby-filter'>
            <h3 className='h3'>Sort by</h3>
            <div className='filter-list low-to-high'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={sortBy === 'lowToHigh'} name="sortByPrice" value='lowToHigh' onChange={handleSortByChange}/>
              Price - Low to High
            </label>
            </div>
            <div className='filter-list high-to-low'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={sortBy === 'highToLow'} name='sortByPrice' value='highToLow' onChange={handleSortByChange}/>
              Price - High to Low
            </label> 
            </div>
        </div><br />
        <div className='rating-filter'>
            <h3 className='h3'>Rating</h3>
            <div className='filter-list star4'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={rating === '4'} type='radio' name='rating' value="4" onChange={handleRatingChange}/>
              4 stars and above
            </label>
            </div>
            <div className='filter-list star3'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={rating === '3'} type='radio'name='rating' value="3" onChange={handleRatingChange}/>
              3 stars and above
            </label>
            </div>
            <div className='filter-list star2'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={rating === '2'} type='radio' name='rating' value="2" onChange={handleRatingChange}/>
              2 stars and above
            </label>
            </div>
            <div className='filter-list star1'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' checked={rating === '1'} type='radio' name='rating' value="1" onChange={handleRatingChange}/>
              1 stars and above
            </label>
            </div>
        </div> <br />
        <div className='discount-filter'>
            <h3 className='h3'>Discount</h3>
            <div className=' filter-list fifty'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={discount === '50'} name='discount' value="50" onChange={handleDiscountChange}/>
              50% and above
            </label>
            </div>
            <div className='filter-list thirty'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={discount === '30'} name='discount' value="30" onChange={handleDiscountChange}/>
              30% and above
            </label>
            </div>
            <div className='filter-list twenty'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='radio' checked={discount === '20'} name='discount' value="20" onChange={handleDiscountChange}/>
              20% and above
            </label>
            </div>
        </div> <br />
        <div className='additional-filter'>
            <h3 className='h3'>Additional Filters</h3>
            <div className='filter-list outofstock'>
            <label className='d-flex align-center gap-s'>
              <input className='check-box 'type='checkbox' checked={isIncludeOutOfStock} onChange={handleIncludeOutOfStockChange}/>
              Include Out of Stock
            </label>
            </div>
            <div className='filter-list fast-delivery' >
            <label className='d-flex align-center gap-s'>
              <input className='check-box' type='checkbox' checked={isFastDelivery} onChange={handleFastDeliveryChange}/>
              Fast Delivery
            </label>
            </div>
        </div>
    </aside>
    )
}
