import { useLogin } from "../../context/login-context";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({children}) => {
    const {isLogIn} = useLogin()
    const location = useLocation()
    console.log(location);
    return isLogIn ? children : <Navigate to={'/auth/login'} state={{from : location}} replace />
}