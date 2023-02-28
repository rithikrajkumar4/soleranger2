import React, { useState } from 'react'
import './Register.css'
import Navbar from '../modals/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'

function Register() {

    const navigate = useNavigate() ;
    const [name,setName] = useState('') ;
    const [email,setEmail] = useState('');
    const [password,setPassword] =  useState('') ;


  return (
    <div className='RegisterPage'>
        <Navbar/>
        <div className="register__container">
            <h1 className="Register__heading">
                Register
            </h1>
            <div className="register__text"> Please enter the details below </div>
            <form action="" className="register__form">
                <input type="text" value={name} placeholder='Name' className="register__input register__email" onChange = {(e) =>setName(e.target.value)}/>
                <input type="email" placeholder='Email' className="register__input register__email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                <input type="password" placeholder='Password' className="register__input register__pass" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <button type='submit' className='register__button'> Register </button>
            </form>
            <div className="register__bottom">Already have an account ? <a className='register__link' onClick={()=>navigate('/login')}> Login</a> </div>
        </div>

    </div>
  )
}

export default Register