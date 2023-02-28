import React from 'react'
import './Logo.css'
import logo from '../Assets/logo/logo.png'

function Logo() {
  return (
    <div className='container-lg center' align='center'>
        <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default Logo