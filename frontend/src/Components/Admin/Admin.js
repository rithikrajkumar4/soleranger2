import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Navbar from '../modals/Navbar/Navbar'
import './Admin.css'
import Product from './Product/Product'

function Admin() {
  return (
    <div className='admin__page'>
        <Navbar/>
        <div className="container-lg admin__container">
            {/* <Dashboard/> */}
            {/* dashboard */}
            {/* no. of products */}
            {/* no. of users */}
            {/* no. of orders */}
            {/* total sale */}
            {/* chart sales chart */}
        {/* prodcuts */}
            {/* products details */}
            {/* create product */}
            {/* update product */}
            {/* remove prodcuts */}
        {/* users */}
            {/* crud */}


        <Product/>
        {/* orders */}
            {/* order details */}
        </div>        
    </div>
  )
}

export default Admin