import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () =>{
    const navigate = useNavigate();
    const handleLogInClick = () => {
        navigate('/auth/login')
    }
    const handleWishlistClick = () => {
        navigate('/wishlist')
    }
    return (
        <div className='container'>
            <div>logo</div>
            <div>title</div>
            <div>searchbox</div>
            <div>
                <button onClick={handleLogInClick}>LogIn</button>
                <button onClick={handleWishlistClick}>Wishlist</button>
                <button>Cart</button>
            </div>

        </div>
    )
}