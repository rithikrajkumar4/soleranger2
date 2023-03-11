import React from 'react'
import Heading from '../modals/Heading/Heading'
import './Insta.css'
import instaImage from '../Assets/insta.jpg'

function Insta() {
  return (
    <div className="container-lg home__insta">
        <div className="row" align='center'>
            <div className="col-12">
                <Heading heading__name={"- Instagram -"}/>
            </div>
            <div className="col-12 insta__col">
               <a href="https://www.instagram.com/solerangers/?igshid=YmMyMTA2M2Y="> <img src={instaImage} alt="Instagram Post" className='instagram__image'/> </a>
            </div>
        </div>
    </div>
  )
}

export default Insta