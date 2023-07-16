import React, { useEffect, useState } from 'react'
import Navbar from '../modals/Navbar/Navbar'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../redux/slices/productDetailSlice";
import { IKImage } from "imagekitio-react";
import '../Loader/loader';
import Loader from '../Loader/loader';
import Footer from '../Footer/Footer';

function ShippingPage() {

    const dispatch = useDispatch() ;
    const [fname,setFname] = useState() ;
    const [lname,setLname] = useState() ;
    const [address,setAddress] = useState();
    const [city,setCity] = useState() ;
    const [country,setCountry] = useState() ;
    const [state,setState] = useState() ;
    const [number,setNumber] = useState(); 
    const [pinCode,setPinCode] = useState() ;
    const [isLoading,setIsLoading] = useState(true) ;
    const product = useSelector((state)=>state.productDetails.productDetail) ;
    const urlEndpoint = "https://ik.imagekit.io/solerangers/";


    useEffect(() =>{
        dispatch(fetchProductDetails('641601442d85af203757ede2'))
          .then((res) => {
            setIsLoading(false) ;
          })
          .catch((err) => console.log(err)) ;
    
    
      },[dispatch]);
    



  return (
    <>
        <Navbar showMainNav={false} showLogo={false}/>
    {isLoading ?(
        <Loader/>
    ) : (
        <div className="shipping__container flex flex-col xl:flex-row flex-wrap pt-28 justify-center gap-36 xl:gap-0 mb-64 mx-4">
        <form className="shipping__form font-poppins flex flex-col text-xl mx-auto">
            <h1 className='font-poppins font-extrabold uppercase'> Shipping Address </h1>
            <div className="name__section pt-8">
                <input  type="text" 
                        placeholder='First Name'  
                        value={fname} 
                        onChange={(e) => {setFname(e.target.value)}}
                        className='outline-none border-b-2 mr-8 w-44'
                />
                
                <input  type="text" 
                        placeholder='Last Name'  
                        value={lname} 
                        onChange={(e) => {setLname(e.target.value)}}
                        className='outline-none border-b-2 w-44'
                />        
            </div>
            <input  type="text" 
                    placeholder='Address Line'
                    value={address}
                    onChange={(e)=> {setAddress(e.target.value)}}
                    className="outline-none border-b-2 pt-4 w-96" 
            />
            <div className="flex pt-4">
                <input  type="text" 
                        placeholder='City'
                        value={city}
                        onChange={(e)=> {setCity(e.target.value)}}
                        className="outline-none border-b-2 mr-8 w-44" 
                />
                <input  type="text" 
                        placeholder='Country'
                        value={country}
                        onChange={(e)=> {setCountry(e.target.value)}}
                        className="outline-none border-b-2 w-44" 
                />
            </div>
            <div className="flex pt-4">
                <input  type="text" 
                        placeholder='State'
                        value={state}
                        onChange={(e)=> {setState(e.target.value)}}
                        className="outline-none border-b-2 mr-8 w-44" 
                />
                <input  type="text" 
                        placeholder='Pin Code'
                        value={pinCode}
                        onChange={(e)=> {setPinCode(e.target.value)}}
                        className="outline-none border-b-2 w-44" 
                />
            </div>
            <input  type="text" 
                        placeholder='Phone Number'
                        value={number}
                        onChange={(e)=> {setNumber(e.target.value)}}
                        className="outline-none pt-4 border-b-2 w-44" 
            />

            <button type='submit' className='mt-5 self-center rounded-md bg-black w-1/2 p-2 text-white '> Continue</button>

        </form>
        <div className="shipping__card flex flex-col mx-auto px-4 font-poppins bg-gray-100 xl:w-1/3 md:order-2 rounded-xl">
                <h1 className='uppercase pt-4 pb-2 text-3xl border-b-2' >  Order</h1>
                <div className=" pt-4 pb-2 border-b-2"> 
                        <div className="flex self-center">
                                <IKImage
                                        urlEndpoint={urlEndpoint}
                                        path={`solerangers/${product.images}/1.png`}
                                        className='md:w-52 w-24'
                                />
                                <div className="flex pt-10 pl-6 flex-col">
                                        <div className="product__name text-2xl font-bold"> {product.name} </div>
                                        <div className="product__price text-xl"> {product.price} </div>
                                </div>
                        </div>
                </div>
                <div className="flex flex-col border-b-2 pb-2 pt-2 ">
                       <div className="flex justify-between text-xl">
                                <div className="total"> Subtotal </div>
                                <div className="price"> {product.price} </div>
                       </div>
                       <div className="flex justify-between text-xl">
                        <div className="ship"> Shipping </div>
                        <div className="price"> 123 </div>
                       </div>          
                </div>
                <div className="flex justify-between text-xl pt-4 pb-4"> 
                        <div className="total"> Total </div>
                        <div className="price font-bold"> 246 </div>
                </div>
        </div>
        {console.log(product)}
    </div>        
    )}    
    <Footer/>
    </>
  )
}

export default ShippingPage