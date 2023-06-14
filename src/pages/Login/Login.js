import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login =() =>{
    const navigate = useNavigate()
    const handleSignupClick = () => {
        navigate('/auth/signup')
    }
    const [isLogIn, setIsLogIn] = useState(false);
    const handleLogInLogOutClick = () => {
        setIsLogIn(!isLogIn);
    }

    return(
        <Fragment>
            <h1>Hi to login page</h1>
            <button onClick={handleLogInLogOutClick}> {isLogIn ? "LogOut" : "LogIn"}</button>
            <button onClick={handleSignupClick}>SignUp</button>
        </Fragment>
        
    )
}