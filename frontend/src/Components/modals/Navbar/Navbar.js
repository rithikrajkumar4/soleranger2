import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Navbar.css'
import {useNavigate} from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import logo from '../../Assets/logo/logo.png'
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {


  const navigate = useNavigate() ;
  const {user} = useSelector(state => state.user) ;


  

  return (
    <>
      {/* Navbar Top */}
      <div className='container-fluid prenav'>
          <nav className='prenavBar'>
            <div className="nav__search">
              <input type="text" placeholder='Search Here' className="nav__searchInput" />
              <SearchIcon className='nav__searchIcon'/>
            </div>
            <div className="nav__rightSide">
              <div className="nav__userName">
                Hii !! { !user ? (<> Guest </>) :( <> log in </> ) }
              </div>
              
              <div className="nav__user nav__icons">
                <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} onClick={() => navigate('/login')} className='accountIcon'/>
              </div>

              <div className="nav__cart nav__icons">
                  <ShoppingCartOutlinedIcon className='nav__shopCart' onClick={()=> navigate('/cart')} sx={{ fontSize: 28 }}/>
              </div>
            </div>
            <div className="nav__toggler">
              <MenuIcon/>
            </div>
          </nav>
      </div>

      {/* Logo */}
      <div className='container-lg center logocontainer' align='center'>
        <img src={logo} alt="logo" className="logo" onClick={() => navigate('/')}/>
      </div>


      {/* Main navbar */}
      <div className="mainNav">
        <div className='container-lg mainnav' id='home'>
            <ul className="mainnav__list">
                <li className="mainNav__listItem" onClick={() => navigate('/')}>  HOME </li>
                <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}>  APPARELS </li>
                <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}> SOLE RANGERS </li>
                <li className="mainNav__listItem" onClick={() => navigate('/')}> <a href="#products">SNEAKERS </a> </li>
                <li className="mainNav__listItem disabel" onClick={() => navigate('/underWorking')}>  DUNKS</li>
                <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}>  JORDANS </li>
            </ul>
        </div>
      </div>
    </>
  ) 
}

export default Navbar