import React from 'react'
import './Insta.css'
import instaImage from '../Assets/insta.jpg'

function Insta() {
  return (
    <div className="container-lg home__insta" id='instagram'>
        <div className="row" align='center'>
            <div className="col-12">
                <h1 className="home__heading"> instagram </h1>
                <hr />
            </div>
            <div className="col-12 insta__col">
               <a href="https://www.instagram.com/solerangers/?igshid=YmMyMTA2M2Y="> <img src={instaImage} alt="Instagram Post" className='instagram__image'/> </a>
            </div>
        </div>
    </div>
  )
}

export default Insta