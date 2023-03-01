import React ,{useState} from 'react'
import Navbar from '../modals/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate() ;
    const [name,setName] = useState() ;
    const [password,setPass] = useState() ;

    return (
    <div className='LoginPage'>
        <Navbar/>
        <div className="login__container">
            <h1 className="login__heading">
                LOGIN
            </h1>
            <div className="login__text"> Please enter your email and password </div>
            <form className="login__form" >
                <input type="email" placeholder='Email' className="login__input login__email" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="password" placeholder='Password' className="login__input login__pass" value={password} onChange={(e) => {setPass(e.target.value)}}/>
                <button type='submit' className='login__button'> Login </button>
            </form>
            <div className="login__bottom">Don't have an account ? <a className='login__link' onClick={()=>navigate('/register')}> Create one</a> </div>
            <div className="login__forgotPass"> <a href="/"> Forgot Password </a> </div>
        </div>
    </div>
  )
}

export default Login