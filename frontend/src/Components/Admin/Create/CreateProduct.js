import React from 'react'
import Navbar from '../../modals/Navbar/Navbar'
import './CreateProduct.css'

function CreateProduct() {
  return (
    <div className='createProduct'>
      <Navbar/>
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <h1 className="createProduct__heading"> Create Product</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct