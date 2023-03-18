
import React, {  useEffect, useState } from "react";
import './productDeatail.css'
import Footer from "../Footer/Footer";
import Navbar from "../modals/Navbar/Navbar";
import Logo from '../Logo/Logo';
import {useNavigate,useParams} from 'react-router-dom'
import axios from "axios";
import ColorTab from "../modals/ColorTab/ColorTab";
import BASE_URL from "../../redux/baseurl";
import img from '../Assets/Carousel/carousel_img1.jpeg'
import { IKImage } from "imagekitio-react";
// import Zoom from 'react-img-hover-zoom'
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleProduct } from "../../redux/slices/productDetail";


const ProductDetail = () => {
  // const dispatch = useDispatch() ;
  const urlEndpoint = "https://ik.imagekit.io/solerangers/";
  const navigate = useNavigate() ;
  const productId = useParams() ;
  const [isLoad,setIsLoad] = useState(true) ;
  const [product,setProduct] = useState([]) ;
  const [qunatity,setQuantity] = useState(1) ;

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
        <Logo  className='logo product__logo'/>
      </div>
      
      {/* <MainNav/> */}

      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6" align='center'>
            {/* <Zoom img src={img}  className="product__image"/> */}
            {/* <div className="img__wrapper">
              <img src={img} alt="product__image" className="product__image"/>
            </div> */}
            {console.log(<IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}`}
                    className='d-block w-100 carousel__image'
                  />)}
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}/1.png`}
                    className='d-block w-100 carousel__image'
                  />
                </div>
                <div className="carousel-item">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}/2.png`}
                    className='d-block w-100 carousel__image'
                  />
                </div>
                <div className="carousel-item">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}/3.png`}
                    className='d-block w-100 carousel__image'
                  />
                </div>
                <div className="carousel-item">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}/4.png`}
                    className='d-block w-100 carousel__image'
                  />
                </div>
                <div className="carousel-item">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={`solerangers/${product.images}/5.png`}
                    className='d-block w-100 carousel__image'
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className="col-lg-4 mx-lg-5 productDetails__col">
            <div className="productDetails__name">
              <h1>{product.name}</h1>
            </div>
            <div className="productDetails__price">
                ₹ {product.price}
            </div>
            <form action="" className="productDetails__form">
              <div className="porductDetails__size">
                <span className="productSize__heading"> size </span>
                <div className="product__sizes">
                  <ColorTab name='uk7'/>
                  {/* {product.stock.map((sizeArray) => (
                    <>
                      {console.log(sizeArray) }
                    </>
                  ) )} */}
                  {/* {product.stock} */}
                </div>
              </div>
              <div className="productDetails__quantity">
                <span className="productQuantity__heading"> quantity </span>
                <div className="quantity__selector">
                  <div className="quantity__decrease" onClick={()=> setQuantity(qunatity-1)}>-</div>
                  <div className="quantity__num">{qunatity}</div>
                  <div className="quantity__increase" onClick={()=> setQuantity(qunatity+1)}>+</div>
                </div>
              </div>
              <div className="productDetails__cart">
                <button className="cart__button"> Add to cart </button>
              </div>
              <div className="productDetails__buyNow">
                <button className="buyNow__button"> BUY NOW </button>
              </div>
            </form>
            <div className="productDetails__desc">
              <hr />
              <p className="product__description">
              
              {product.description}
              </p>
              {console.log(product.stock)}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    )}
export default ProductDetail;
