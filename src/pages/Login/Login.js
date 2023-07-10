import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLogin } from "../../context/login-context";
import { Navbar } from "../../components/Navbar/Navbar";

export const Login =() =>{
    const navigate = useNavigate()
    const location = useLocation()
    // console.log("from log in")
    // console.log(location)
    const handleSignupClick = () => {
        navigate('/auth/signup')
    }
    const {isLogIn, setIsLogIn} = useLogin();
    const handleLogInLogOutClick = () => {
        setIsLogIn(!isLogIn);
        navigate(location?.state?.from?.pathname || '/' ,{replace:true})
    }

    return(
        <Fragment>
            <Navbar />
            <div className="page">
            <h1>Hi to login page</h1>
            <button onClick={handleLogInLogOutClick}> {isLogIn ? "LogOut" : "LogIn"}</button>
            <button onClick={handleSignupClick}>SignUp</button>
            </div>
        </Fragment>
        
    )
}