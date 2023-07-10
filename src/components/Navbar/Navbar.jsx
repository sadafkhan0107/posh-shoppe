import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import {debounce} from 'lodash'
import { useFilter } from '../../context/filter-context';
import logo from '../../utilities/Posh Shoppe.png';

export const Navbar = () =>{
    const {searchInput,dispatch} = useFilter()
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
            <div className='d-flex align-center gap-s'>
              <div><img className='page-logo' src={logo} alt='logo-pic'/></div>
              <h1>
              <Link className="page-title" to="/">
               PoshShoppe
              </Link>
              </h1>
            </div>
            <div className='search-container relative-pos'>
                <span className="material-icons-outlined search-icon absolute-pos">search</span>
                <input className='search-box' placeholder='Search a product' onChange={handleSearchChange}/> 
             </div>
            <div className='nav-items d-flex align-center'>
                <button className='nav-items-button login br-4 text-space-sm' onClick={handleLogInClick}>Login</button>
                <button className='nav-items-button' onClick={handleWishlistClick}>
                    <span className="material-icons-outlined">favorite_border</span></button>
                <button className='nav-items-button' onClick={handleCartClick}>
                <span className="material-icons-outlined">shopping_cart</span>
                </button>
            </div>
        </div>
   
    )
}