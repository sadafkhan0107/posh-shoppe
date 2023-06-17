import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import {debounce} from 'lodash'
import { useFilter } from '../../context/filter-context';

export const Navbar = () =>{
    const {dispatch} = useFilter()
    const navigate = useNavigate();
    const handleLogInClick = () => {
        navigate('/auth/login')
    }
    const handleWishlistClick = () => {
        navigate('/wishlist')
    }
    const handleCartClick = () => {
        navigate('/cart')
    }
    const handleSearchChange = debounce((e) =>
    dispatch({
      type: "search",
      payload: e.target.value
    }), 500)
    
    return (
        
        <div className='container'>
            <div className='brand'>
              <div><img className='page-logo' src='https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg' alt='logo-pic'/></div>
              <h1>
              <Link className="page-title" to="/">
            The Right Fit
          </Link>
              </h1>
            </div>
            <div className='search-container'>
                <input className='search-box' placeholder='Search' onChange={handleSearchChange}/> 
                <button className='search-icon'><span className="material-icons-outlined">search</span></button>
             </div>
            <div className='nav-items'>
                <button className='nav-items-button login' onClick={handleLogInClick}>Login</button>
                <button className='nav-items-button' onClick={handleWishlistClick}>
                    <span className="material-icons-outlined">favorite_border</span></button>
                <button className='nav-items-button' onClick={handleCartClick}>
                <span className="material-icons-outlined">shopping_cart</span>
                </button>
            </div>
        </div>
   
    )
}