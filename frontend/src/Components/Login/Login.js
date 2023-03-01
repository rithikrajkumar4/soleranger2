import React ,{useState} from 'react'
import Navbar from '../modals/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import axios from 'axios' ;

function Login() {
    const navigate = useNavigate() ;
    const [email,setEmail] = useState() ;
    const [password,setPass] = useState() ;
    const [role,setRole] = useState() ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        const loginData = {
            email : email ,
            password : password
        } ;

        let axiosConfig = {
            headers : {
            'Content-Type':'application/json',
            "Access-Control-Allow-Origin": "*",
            }
        };

        await axios.post('http://localhost:4000/api/v1/login',loginData,axiosConfig)
         .then((res) => {
            if(res.status === 400 || !res){
                alert('wrong id or password') ;
            } else{
                if(res.data.user.role === 'admin'){
                    navigate('/admin') ;
                }
            }
         })
         .catch((err) =>{
            alert('wrong email or password') ;
         })
    }


    return (
    <div className='LoginPage'>
        <Navbar/>
        <div className="login__container">
            <h1 className="login__heading">
                LOGIN
            </h1>
            <div className="login__text"> Please enter your email and password </div>
            <form className="login__form" >
                <input type="email" placeholder='Email' className="login__input login__email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" placeholder='Password' className="login__input login__pass" value={password} onChange={(e) => {setPass(e.target.value)}}/>
                <button  className='login__button' onClick={handleSubmit}> Login </button>
            </form>
            <div className="login__bottom">Don't have an account ? <a className='login__link' onClick={()=>navigate('/register')}> Create one</a> </div>
            <div className="login__forgotPass"> <a href="/"> Forgot Password </a> </div>
        </div>
    </div>
  )
}

export default Login