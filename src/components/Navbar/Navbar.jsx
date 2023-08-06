import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import {debounce} from 'lodash'
import { useFilter } from '../../context/filter-context';
import logo from '../../utilities/Posh Shoppe.png';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-context';

export const Navbar = () =>{
    const {searchInput,dispatch} = useFilter()
    const {cart} = useCart();
    const {wishlist} = useWishlist();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogInClick = () => {
        if(!token){
            navigate('/auth/login')
        }
        else{
            localStorage.clear()
            navigate('/auth/login')
        }
         
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
            <div className='nav-items d-flex align-center gap-l'>
                <button className='nav-items-button login br-4 text-space-sm border-none button' onClick={handleLogInClick}>{token? 'LogOut' : 'Login'}</button>
                <div className='relative-pos'>
                    <button className='nav-items-button button' onClick={handleWishlistClick}>
                        <span className="material-icons-outlined">favorite_border</span>
                        <span className='over-num absolute-pos top-0 right-0'>{wishlist.length}</span>
                    </button>
                </div>
                <div className='relative-pos'>
                    <button className='nav-items-button button' onClick={handleCartClick}>
                    <span className="material-icons-outlined">shopping_cart</span>
                    <span className='over-num absolute-pos top-0 right-0'>{cart.length}</span>
                    </button>
                </div>
            </div>
        </div>
   
    )
}