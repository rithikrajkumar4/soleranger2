import React from 'react'
import './MainNav.css'

function MainNav() {
  return (
    <div className='container-lg mainnav' id='home'>
        <ul className="mainnav__list">
            <li className="mainNav__listItem"> <a href="#home"> Home </a></li>
            <li className="mainNav__listItem"> <a href="#products"> Sneakers </a></li>
            <li className="mainNav__listItem"> <a href="#footer"> Contact Us </a> </li>
            <li className="mainNav__listItem"> <a href="#products">Our Products </a> </li>
            <li className="mainNav__listItem"> <a href="#location"> Store Location</a> </li>
            <li className="mainNav__listItem"> <a href="#instagram"> Instagram </a></li>
        </ul>
    </div>
  )
}

export default MainNav