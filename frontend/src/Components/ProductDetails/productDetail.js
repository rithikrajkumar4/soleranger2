
import React, { Fragment, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../modals/Navbar/Navbar";
import Logo from '../Logo/Logo';
import {useNavigate,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/slices/productDetail";


const ProductDetail = () => {
  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;
  const productId = useParams() ;

  useEffect(() =>{
    console.log(productId.id);
    dispatch(fetchSingleProduct(productId.id))
  },[dispatch]);

  return (
    <div>
      <Navbar />
      <div className="logo__" onClick={() => navigate('/')}>
        <Logo  className='logo'/>
      </div>
      
      <div className="container-lg">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
<<<<<<< HEAD:frontend/src/Components/ProductDetails/productDetail.js
      <Footer/>
      </div>
    )}
=======
=======
import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../modals/Navbar/Navbar";



const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <Fragment>
        <div>ProductDetail</div>
      </Fragment>

      <Footer />
    </div>
  );
};

>>>>>>> parent of 57cf21d (product page ok):frontend/src/Components/ProductDetails/productDeatail.js
export default ProductDetail;
