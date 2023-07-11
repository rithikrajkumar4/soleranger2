import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../modals/Navbar/Navbar'
import Loader from '../Loader/loader';
import Footer from '../Footer/Footer';
import { fetchProductDetails } from "../../redux/slices/productDetailSlice";
import { IKImage } from "imagekitio-react";

function Checkout() {
  

    const urlEndpoint = "https://ik.imagekit.io/solerangers/";
    const dispatch = useDispatch() ;
    const [isLoading,setIsLoading] = useState(true) ;
    const product = useSelector((state)=>state.productDetails.productDetail) ;

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
        <div className="checkout__page pt-32 pb-24 flex flex-wrap mx-5 justify-center 
        gap-52 place-content-center font-poppins">
            <div className="bg-slate-100 p-5 xl:w-1/3 md:w-full flex flex-col xl:h-1/2 shadow-xl">
                <div className="heading uppercase text-4xl font-extrabold mb-2 ">
                    checkout
                </div>
                <div className="h-1 border-b-2 drop-shadow-sm"></div>
                <div className="method text-2xl mt-5">
                    Payment Methods
                </div>
                <div className="options flex mt-3 gap-20 mb-5">
                    <div className=""> 1</div>
                    <div className=""> 2</div>
                    <div className=""> 3</div>
                </div>
                <div className="buttons__checkout flex justify-between ">
                    <div className="button1_checkout  bg-blue-200  font-bold text-sm pr-4 pl-4 pt-2 pb-2 cursor-pointer" onClick={(e) => e.preventDefault()}>
                        Back
                    </div>
                    <div className="button2_chekcout button1_checkout bg-blue-200  font-bold text-sm pr-4 pl-4 pt-2 pb-2 cursor-pointer" onClick={(e) => e.preventDefault()}>
                        Confirm Payment 
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 p-5 xl:w-1/3 md:w-full flex flex-col overflow-hidden shadow-xl">
                <div className="uppercase text-4xl font-extrabold mb-2">
                    Order
                </div>
                <div className="h-1 border-b-2 drop-shadow-sm"></div>
                <div className="flex mt-4 gap-2 justify-between">
                    <div className="flex">
                        <div className="max-w-sm">
                                        <IKImage
                                            urlEndpoint={urlEndpoint}
                                            path={`solerangers/${product.images}/1.png`}
                                            className='w-28'
                                        />
                        </div>
                        <div className="flex flex-col justify-between self-center">
                            <div className="text-xl font-bold">
                                {product.name}
                            </div>
                            <div className="text-gray-400">
                                {/* {product.size} */} SIZE
                            </div>
                        </div>
                    </div>    
                    <div className=" self-center">
                        {product.price}    
                    </div>
                </div>
                
                <div className="flex justify-between mt-3">
                    <div className="">
                        Shipping
                    </div>
                    <div className="">
                        300                    
                    </div>
                </div>
                <div className="h-1 border-b-2 mt-3 drop-shadow-sm"></div>
                <div className="mt-2 flex justify-between">
                    <div className=" uppercase font-bold text-xl">
                        Total
                    </div>
                    <div className="text-xl text-red-700">
                        13300
                    </div>
                </div>
                
            </div>
        </div>
    )}    
    <Footer/>
    </>
  )
}

export default Checkout