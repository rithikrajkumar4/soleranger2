import React, { useEffect, useState } from 'react'
import './Register.css'
import Navbar from '../modals/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import axios from 'axios' ;

function Register() {

    const navigate = useNavigate() ;
    const [name,setName] = useState('') ;
    const [email,setEmail] = useState('');
    const [password,setPassword] =  useState('') ;

    const handleClick = async(e) => {
        console.log('in') ;
        e.preventDefault() ;
        const postData = {
            name : name ,
            email : email,
            password : password
        }

        const res = await fetch("http://localhost:4000/api/v1/register",{   
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(
                postData
            )
        }).then((res) => {
                console.log('worked')
                if(res.status === (400) || !res){
                    alert("Unsuccessful")
                }else{
                    alert('Registration Successful')
                }
        }).catch((err) => console.log(err))
    };

  return (
    <div className='RegisterPage'>
        <Navbar/>
        <div className="register__container">
            <h1 className="Register__heading">
                Register
            </h1>
            <div className="register__text"> Please enter the details below </div>
            <form className="register__form">
                <input type="text" value={name} placeholder='Name' className="register__input register__email" onChange = {(e) =>setName(e.target.value)} required/>
                <input type="email" placeholder='Email' className="register__input register__email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
                <input type="password" placeholder='Password' className="register__input register__pass" value={password} onChange={(e) =>setPassword(e.target.value)} required/>
                <button className='register__button' onClick={handleClick}> Register </button>
            </form>
            <div className="register__bottom">Already have an account ? <a className='register__link' onClick={()=>navigate('/login')}> Login</a> </div>
        </div>

    </div>
  )
}

export default Register