import React, { useState } from 'react'
import Navbar from '../../modals/Navbar/Navbar'
import './CreateProduct.css'
import axios from 'axios' ;

function CreateProduct() {
  
  const [productName,setProductName] = useState('') ;
  const [productDesc,setProductDesc] = useState('') ;
  const [productPrice,setProductPrice] = useState('') ;
  const [productBrand,setProductBrand] = useState('') ;
  const [productCategory,setProductCategory] = useState('') ;

  
  const submitHandler = async(e) => {
    e.preventDefault() ;
    
  }

  return (
    <div className='createProduct'>
      <Navbar/>
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <h1 className="createProduct__heading"> Create Product</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-12">
              <form className="createProduct__form" onSubmit={submitHandler}>
                <div className="col-8">
                  <div className="createProduct__formInput">
                    <label htmlFor="productName" className='createProduct__labelName'> Enter Name :  </label>
                    <input type="text" id='productName' placeholder='Enter Name' className="createProduct__name createProduct__input" value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
                  </div>
                  <div className="createProduct__formInput">
                    <label htmlFor="productPrice" className='createProduct__labelName'> Enter Price :  </label>
                    <input type="text" id='productPrice' placeholder='Enter Price' className="createProduct__price createProduct__input" value={productPrice} onChange={(e) =>{setProductPrice(e.target.value)}}/>
                  </div>
                  <div className="createProduct__formInput">
                    <label htmlFor="productDescription" className='createProduct__labelName'> Enter Description :  </label>
                    <textarea id='productDescription' type="text" placeholder='Enter product description' className="createProduct__Desc createProduct__input" value={productDesc} onChange={(e)=>{setProductDesc(e.target.value)}}/>
                  </div>
                  <div className="createProduct__formInput">
                    <label htmlFor="productBrand" className='createProduct__labelName'> Enter Brand :  </label>
                    <input type="text" id='productBrand' placeholder='Enter Brand Name'  className="createProduct__brand createProduct__input" value={productBrand} onChange={(e) => {setProductBrand(e.target.value)}}/>
                  </div>
                  <div className="createProduct__formInput">
                    <label htmlFor="productCategory" className='createProduct__labelName'> Enter Category :  </label>
                    <input type="text" id='productCategory' placeholder='Enter Product category'  className="createProduct__category createProduct__input" value={productCategory} onChange={(e) => {setProductCategory(e.target.value)}}/>
                  </div>
                  {/* <div className="createProduct__formInput">
                    <label htmlFor="productImages" className='createProduct__labelName'> Select Images :  </label>
                    <input type="file" id='productImages' multiple="multiple" className="" />
                    <input type="file" id='productImages' multiple="multiple" className="createProduct__imagee createProduct__input" />
                  </div> */}
                  <button type='submit' className='createProduct__submitButton'> Create </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct