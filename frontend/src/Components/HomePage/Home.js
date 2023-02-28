import React from 'react'
import Carousel from '../Carousel/Carousel'
import Logo from '../Logo/Logo';
import './Home.css' ;

import CardTray from '../CardTray/CardTray';
import Navbar from '../modals/Navbar/Navbar';
import Footer from '../Footer/Footer';

const product = {
  name:"Nike Shoe 1",
  price:"3000",
  _id:"12234"
}

function Home() {
  return (
    <div className='homepage'>
      {/* preNav */}
      <Navbar/>
      {/* logo */}
        <Logo/>
      {/* navbar */}
      {/* carousel */}
        <Carousel/>
      {/* cardsTray */}
        <CardTray product={product}/>
        
      {/* midwest Image */}
      {/* youtube/insta */}
      {/* map location */}
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home