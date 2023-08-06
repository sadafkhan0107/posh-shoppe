import './Login.css';
import { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLogin } from "../../context/login-context";
import { Navbar } from "../../components/Navbar/Navbar";
import axios from 'axios';
import CryptoJS from 'crypto-js';

export const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [form, setForm] = useState({number:'', password:''});
    // console.log("from log in")
    // console.log(location)
    const handleSignupClick = () => {
        navigate('/auth/signup')
    }
    const { isLogIn, setIsLogIn } = useLogin();
   
    const handleNumChange = (e) => {
        const num = e.target.value
        setForm({...form, number:num})
    }
    const handlePassChange = (e) => {
        const pass = e.target.value
        setForm({...form, password:pass})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const {data: {accessToken, username}} = await axios.post('https://sadafuu.prakashsakari.repl.co/api/auth/login',{number: form.number, password: CryptoJS.AES.encrypt(form.password, process.env.REACT_APP_PASSWORD_SECRET_KEY).toString()})
            console.log({accessToken, username})
            localStorage.setItem('token', accessToken)
            localStorage.setItem('username', username)
            setForm({number:'', password:''})
            navigate(location?.state?.from?.pathname || '/', { replace: true })
        }catch(err){
            console.log(err , 'failed')
        }
    }

    const handleTestClick = async() => {
        try{
            const {data: {accessToken, username}} = await axios.post('https://sadafuu.prakashsakari.repl.co/api/auth/login',{number: '1234567892', password: CryptoJS.AES.encrypt('1234567892', process.env.REACT_APP_PASSWORD_SECRET_KEY).toString()})
            console.log({accessToken, username})
            localStorage.setItem('token', accessToken)
            localStorage.setItem('username', username)
            setForm({number:'', password:''})
            navigate(location?.state?.from?.pathname || '/', { replace: true })
        }catch(err){
            console.log(err , 'failed')
        }
    }
    return (
        <Fragment>
            <Navbar />
            <div className='d-flex justify-center page-login'>
                <div className="login-auth d-column d-flex justify-center align-center bx-shd">
                    <h2 className="auth-title">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-container d-column d-flex gap-s">
                            <label className="form-label">Number</label>
                            <input type="text" value={form.number} className="form-input lh-ls" maxLength='10' placeholder="9820******" required onChange={handleNumChange}/>
                        </div>

                        <div className="form-container d-column d-flex gap-s">
                            <label className="form-label">Password</label>
                            <input type="password" value={form.password} className="form-input lh-ls" placeholder="*********" required onChange={handlePassChange}/>
                        </div>
                        <div className="cta">
                            <button className="login-btn button btn btn-primary btn-margin">Login</button>
                        </div>
                    </form>
                    <div className="cta">
                            <button className="login-btn button btn btn-secondary btn-margin" onClick={handleTestClick}>Login with Test Credentials</button>
                        </div>
                    <div className="create-account d-flex align-center justify-center">
                                <span className="new-account">Create New Account</span>
                                    <button className="button btn" onClick={handleSignupClick}>
                                        <span className="material-icons-outlined">
                                            arrow_forward_ios
                                        </span>
                                    </button>
                    </div>
                </div>
            </div>
            {/* <div className="page">
            <h1>Hi to login page</h1>
            <button onClick={handleLogInLogOutClick}> {isLogIn ? "LogOut" : "LogIn"}</button>
            <button onClick={handleSignupClick}>SignUp</button>
            </div> */}
        </Fragment>

    )
}