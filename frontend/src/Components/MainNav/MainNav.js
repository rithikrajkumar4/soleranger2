import React from 'react'
import './MainNav.css'

function MainNav() {
  return (
    <div className="mainNav">
      <div className='container-lg mainnav' id='home'>
          <ul className="mainnav__list">
              <li className="mainNav__listItem"> <a href="#home"> HOME </a></li>
              <li className="mainNav__listItem"> <a href="#products"> SNEAKER </a></li>
              <li className="mainNav__listItem"> <a href="#footer"> CONTACT US </a> </li>
              <li className="mainNav__listItem"> <a href="#products">OUR PRODUCTS </a> </li>
              <li className="mainNav__listItem"> <a href="#location"> STORE LOCATION</a> </li>
              <li className="mainNav__listItem"> <a href="#instagram"> INSTAGRAM </a></li>
          </ul>
      </div>
    </div>
  )
}

export default MainNav