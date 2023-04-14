import React, { useEffect, useState } from "react";
import Navbar from "../modals/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import axios from 'axios' ;
import { authLogin } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const loginData = {
    //     email : email ,
    //     password : password
    // } ;

    // let axiosConfig = {
    //     headers : {
    //     'Content-Type':'application/json',
    //     "Access-Control-Allow-Origin": "*",
    //     }
    // };

    dispatch(authLogin({ email, password }));

    console.log(error);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  });
  return (
    <div className="LoginPage">
      <Navbar showMainNav={false} />
      <div className="login__container">
        <h1 className="login__heading font-poppins">LOGIN</h1>
        <div className="login__text font-poppins">
          {" "}
          Please enter your email and password{" "}
        </div>
        <form className="login__form">
          <input
            type="email"
            placeholder="Email"
            className="login__input login__email font-poppins"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="login__input login__pass font-poppins"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button className="login__button" onClick={handleSubmit}>
            {" "}
            Login{" "}
          </button>
        </form>
        <div className="login__bottom font-poppins">
          Don't have an account ?{" "}
          <span
            className="login__link text-black cursor-pointer underline"
            onClick={() => navigate("/register")}
          >
            {" "}
            Create one
          </span>{" "}
        </div>
        <div className="login__forgotPass font-poppins">
          {" "}
          <a href="/"> Forgot Password </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
