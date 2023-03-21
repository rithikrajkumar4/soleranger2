import React from 'react'
import './MainNav.css'

function MainNav() {
  return (
    <div className="mainNav">
      <div className='container-lg mainnav' id='home'>
          <ul className="mainnav__list">
              <li className="mainNav__listItem"> <a href="#home"> HOME </a></li>
              <li className="mainNav__listItem"> <a href="#products"> APPARELS </a></li>
              <li className="mainNav__listItem"> <a href="#footer"> SOLE RANGERS </a> </li>
              <li className="mainNav__listItem"> <a href="#products">SNEAKERS </a> </li>
              <li className="mainNav__listItem"> <a href="#location"> DUNKS</a> </li>
              <li className="mainNav__listItem"> <a href="#instagram"> JORDANS </a></li>
          </ul>
      </div>
    </div>
  )
}

export default MainNav