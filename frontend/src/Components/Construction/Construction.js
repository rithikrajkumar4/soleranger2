import React from 'react'
import './Construction.css'
import {useNavigate} from 'react-router-dom'
import logo from '../Assets/logo/logo.png'

function Construction() {
  
  const navigate = useNavigate() ;

  return (
    <div className='construction__container'>
        <div className="container-lg">
            <div className="row" align='center'>
                <div className="col-12 ">
                    <img src={logo} alt="SoleRangers logo" className='construction__logo' onClick={() => navigate('/')}/>
                    <h1 className='construction__heading'> This page is currently under construction </h1>
                    <hr />
                </div>
            </div>
            <div className="row" align='center'>
                <div className="col-12">
                    <span className='construction__link' onClick={() => navigate('/')}> Click here to go Back Home </span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Construction