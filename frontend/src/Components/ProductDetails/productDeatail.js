
import React, {  useEffect, useState } from "react";
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

  const [product,setProduct] = useState([]) ;

  useEffect(() =>{
    async function fetchProduct ()  {
      await  axios(`${BASE_URL}api/v1/product/${productId.id}`)
      .then((res) => {
        // console.log('working') ;
        // console.log(res.data.product) ;
        setProduct(res.data.product) ;
        // console.log(product) ;
      })
      .catch((err) => console.log(err)) ;
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
            {console.log(product)}
          </div>
        </div>
      </div>
      </div>
    )}
export default ProductDetail;
