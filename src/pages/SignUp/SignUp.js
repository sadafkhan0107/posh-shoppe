import '../Login/Login.css';
import { Fragment, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

export const SignUp = () => {
    const [form, setForm] = useState({name:'', number:'', email:'', password:''});
    const navigate = useNavigate();
    const secret = process.env.REACT_APP_PASSWORD_SECRET_KEY

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const data = await axios.post('https://sadafuu.prakashsakari.repl.co/api/auth/register', {
                "username": form.name,
                "number": form.number,
                "email": form.email,
                "password": CryptoJS.AES.encrypt(form.password, secret).toString()
            })
            console.log(data);
            setForm({name:'', number:'', email:'', password:''})
            navigate('/auth/login')
        }catch(err){
            console.log(err, 'failed')
        }
    }
    return (
        <Fragment>
            <Navbar />
            <div className='d-flex justify-center page'>
                <div className="login-auth d-column d-flex justify-center align-center">
                    <h2 className="auth-title">Signup</h2>
                    <form onSubmit={handleSubmit}> 
                    <div className="form-container  d-column d-flex gap-s">
                        <label className="form-label">Name</label>
                        <input type="text" value={form.name} className="form-input lh-ls" placeholder="Sadaf Khan" required onChange={(e) => setForm({...form, name:e.target.value})} />
                    </div>
                    <div className="form-container  d-column d-flex gap-s">
                        <label className="form-label">Number</label>
                        <input type="number" value={form.number} className="form-input lh-ls" placeholder="9867******" required onChange={(e) => setForm({...form, number:e.target.value})} />
                    </div>

                    <div className="form-container  d-column d-flex gap-s">
                        <label className="form-label">Email address</label>
                        <input type="email" value={form.email} className="form-input lh-ls" placeholder="name@example.com" required onChange={(e) => setForm({...form, email:e.target.value})} />
                    </div>

                    <div className="form-container d-column d-flex gap-s relative-pos">
                        <label className="form-label">Password</label>
                        <input type="password" value={form.password} className="form-input lh-ls" placeholder="*********" required onChange={(e) => setForm({...form, password:e.target.value})} />
                        <button className="button btn">
                            <span className="material-icons-outlined absolute-pos pwd-icon-position">
                                visibility_off
                            </span>
                        </button>
                    </div>

                    <div className="cta">
                        <button className="login-btn button btn btn-primary cursor btn-margin">Create New Account</button>
                    </div>
                    </form>
                    <div className="create-account d-flex align-center justify-center">
                            <span className="new-account">Already have an Account</span>
                            <button className="button btn" onClick={() => navigate('/auth/login')}>
                                <span className="material-icons-outlined">
                                    arrow_forward_ios
                                </span>
                            </button>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}