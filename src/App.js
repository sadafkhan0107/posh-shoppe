import './App.css';
import { Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home/Home'
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { Wishlist } from './pages/Wishlist/Wishlist';

function App() {
  return(
  <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/wishlist' element = {<Wishlist />} />
      </Routes>
    </div>
  )
}

export default App;
