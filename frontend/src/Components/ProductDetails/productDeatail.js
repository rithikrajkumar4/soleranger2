
import React, { Fragment, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../modals/Navbar/Navbar";
import Logo from '../Logo/Logo';
import MainNav from '../MainNav/MainNav';
import {useNavigate,useParams} from 'react-router-dom'
import axios from "axios";
import BASE_URL from "../../redux/baseurl";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleProduct } from "../../redux/slices/productDetail";


const ProductDetail = () => {
  // const dispatch = useDispatch() ;
  const navigate = useNavigate() ;
  const productId = useParams() ;

  useEffect(() =>{
    async function fetchProduct ()  {
      console.log(productId) ;
      const request = await  axios(`${BASE_URL}api/v1/product/${productId.id}`)
      console.log('working') ;
      console.log(request.data) ;
    }

    fetchProduct() ;
  },[]);

  return (
    <div>
      <Navbar />
      <div className="logo__" onClick={() => navigate('/')}>
        <Logo  className='logo'/>
      </div>
      
      {/* <MainNav/> */}
      <div className="container-lg">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )};
export default ProductDetail;
