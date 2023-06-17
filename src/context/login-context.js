import { useContext, createContext, useState } from "react";

const LoginContext = createContext();

const LogInProvider = ({children}) => {
    const [isLogIn, setIsLogIn] = useState(false);
    return(
        <LoginContext.Provider value={{isLogIn, setIsLogIn}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

export {useLogin, LogInProvider};