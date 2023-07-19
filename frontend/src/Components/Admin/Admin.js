import React from 'react'
import Navbar from '../modals/Navbar/Navbar'
import './Admin.css'
import Product from './Product/Product'
import { useSelector } from 'react-redux'
import SideNav from './SideNav/SideNav'

function Admin() {

    const {user} = useSelector(state => state.user) ;



   return (
        <>
        {/* {!user ? (
            <>
               Please login first
            </>
        ) :( */}
        <div className='admin__page'>
        <Navbar/>
        <div className="flex">
            <div className="">
                <SideNav/>
            </div>
            <div className="w-screen bg-gray-100 pt-20 ">
                <Product/>
            </div>
        </div>
        
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


        {/* <Product/> */}
        {/* orders */}
            {/* order details */}
        </div>        
        </div>
        {/* )} */}
        </>
  )
}

export default Admin