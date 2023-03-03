import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Navbar from '../modals/Navbar/Navbar'
import './Admin.css'
import Product from './Product/Product'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from '../Login/Login'

function Admin() {

    const {user} = useSelector(state => state.user) ;
    const navigate = useNavigate() ;

    const navLogin = () => {
        navigate('/login') ;
    }

   return (
        <>
        {!user ? (
            <>
               Please login first
            </>
        ) :(
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
        )}
        </>
  )
}

export default Admin