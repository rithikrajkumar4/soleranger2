import React from 'react'
import Carousel from '../Carousel/Carousel'
import './Home.css' ;

import CardTray from '../CardTray/CardTray';
import Navbar from '../modals/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import Insta from '../Insta/Insta';


function Home() {
  return (
    <div className='homepage'>
      {/* preNav */}
      <Navbar  showMainNav={true} showLogo={true}/>
      {/* logo */}
        {/* <Logo/> */}
      {/* navbar */}
      {/* <MainNav/> */}
      {/* carousel */}
        <Carousel/>
      {/* cardsTray */}
        <CardTray/>
        
      {/* midwest Image */}
      {/* youtube/insta */}
      {/* map location */}
      <div className="xl:flex justify-center  border-t-2 mx-auto w-screen">
          <div className=""> <Map/> </div>  
          <div className=""> <Insta/> </div> 
      </div>
      
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home