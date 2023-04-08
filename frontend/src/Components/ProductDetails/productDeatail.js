
import React, {  useEffect, useState } from "react";
import './productDeatail.css'
import Footer from "../Footer/Footer";
import Navbar from "../modals/Navbar/Navbar";
import {useParams} from 'react-router-dom'
import ColorTab from "../modals/ColorTab/ColorTab";
import { IKImage } from "imagekitio-react";
import '../Loader/loader'
// import Zoom from 'react-img-hover-zoom'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../redux/slices/productDetailSlice";


const ProductDetail = () => {
  const dispatch = useDispatch() ;
  const urlEndpoint = "https://ik.imagekit.io/solerangers/";
  // const navigate = useNavigate() ;
  const productId = useParams() ;
  const [isLoading,setIsLoading] = useState(true) ;
  const product = useSelector((state)=>state.productDetails.productDetail) ;
  // const [qunatity,setQuantity] = useState(1) ;
  // const [size,setSize] = useState([]) ;


  useEffect(() =>{
    dispatch(fetchProductDetails(productId.id))
      .then((res) => {
        setIsLoading(false) ;
      })
      .catch((err) => console.log(err)) ;


  },[dispatch,productId.id]);
  return (
    <div className="productDetails">
      <Navbar />
      {/* <div className="logo__" onClick={() => navigate('/')}>
        <Logo  className='logo product__logo'/>
      </div> */}
      
      {/* <MainNav/> */}

      {isLoading?(
        <loader/>
      ):(

        <div className="container-lg ">
        <div className="row">
          <div className="col-lg-6" align='center'>
            {/* <Zoom img src={img}  className="product__image"/> */}
            {/* <div className="img__wrapper">
              <img src={img} alt="product__image" className="product__image"/>
            </div> */}
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
            <form action={(e) =>e.preventDefault()} className="productDetails__form">
              <div className="porductDetails__size">
                <span className="productSize__heading"> size </span>
                <div className="product__sizes">
                  
                  {/* {console.log(product.stock)} */}
                  <div className="size__container" align='center'>
                    {product.stock.map((sizeArray) => (
                        <ColorTab name={sizeArray.key} key={sizeArray._id} />
                    ) )}
                  </div>
                  {/* {product.stock} */}
                </div>
              </div>

              <div className="productDetails__demo">
                *for purchasing please dm us on instagram
              </div>
              <div className="productDetails__button">
                 <span className="productDetails__instaButton"> <a href="https://www.instagram.com/solerangers/?igshid=YmMyMTA2M2Y="> Click here to open instagram </a> </span>
              </div>

              {/* <div className="productDetails__quantity">
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
              </div> */}
            </form>
            <div className="productDetails__desc">
              <hr />
              <p className="product__description">
              
              {product.description}
              </p>
            
            </div>
          </div>
        </div>
      </div>

      )}

      
      <Footer/>
      </div>
    )}
export default ProductDetail;
