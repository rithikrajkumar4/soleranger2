import React, { useEffect, useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Navbar.css'
import {useNavigate} from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import logo from '../../Assets/logo/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import logoName from '../../Assets/logo/logoName.png'
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar({showMainNav,showLogo}) {


  const navigate = useNavigate() ;

  // const getUser = (state) => {
  //   return state.user.name
  // }

  // const [user, setUser] = useState({})
  // const {user} = useSelector(getUser(myState)) ;

  const [user, setUser] = useState({})
  
  
  const [isUser,setIsUser] = useState(false); 
  useEffect(()=> {
    //logic for getting a value from local storage stored under the key 'key'
    const userDetails = JSON.parse(localStorage.getItem('user')) ;
    if(userDetails){
      setUser(userDetails) ;
      setIsUser(true) ;
    }  
  },[])
  
  
  return (
    <>
      {/* Navbar Top */}
      <div className='container-fluid prenav'>

          <nav className='prenavBar relative h-11'>

            <div className="logoSection">
                  <img src={logoName} alt="SoleRangers" className='h-6 mx-auto text-center self-center cursor-pointer' onClick={() =>navigate('/')}/>
            </div>

            <div className="nav__rightSide flex self-center justify-items-end justify-self-end  right-0">
              
            <div className="">
                Hii !! { isUser ? 
                          (
                          <>
                            <span className='text-darkGray cursor-pointer hover:underline hover:text-darkBlack' onClick={() => navigate('/user')}> {user.user.name}</span> 
                          </>
                          ) 
                          :( <> Guest </> ) 
                       }
              </div>

              { isUser ? 
                      <div className="nav__user nav__icons pl-2">
                          <LogoutIcon sx={{ fontSize: 28 }} onClick={() => navigate('/login')} className='accountIcon'/>
                      </div>
              : 
                      <div className="nav__user nav__icons pl-2">
                          <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} onClick={() => navigate('/login')} className='accountIcon'/>
                      </div>
              }

              

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
      {(showLogo) ?
        <div className='container-lg center logocontainer' align='center'>
          <img src={logo} alt="logo" className="logo" onClick={() => navigate('/')}/>
        </div>:(<></>)}
      {/* Main navbar */}
      {(showMainNav) ? (
                <div className="mainNav">
                <div className='container-lg mainnav' id='home'>
                    <ul className="mainnav__list">
                        <li className="mainNav__listItem" onClick={() => navigate('/')}>  HOME </li>
                        <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}>  APPARELS </li>
                        <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}> SOLE*RANGERS </li>
                        <li className="mainNav__listItem" onClick={() => navigate('/')}> <a href="#products">SNEAKERS </a> </li>
                        <li className="mainNav__listItem disabel" onClick={() => navigate('/underWorking')}>  DUNKS</li>
                        <li className="mainNav__listItem disable" onClick={() => navigate('/underWorking')}>  JORDANS </li>
                    </ul>
                </div>
              </div>
      ):(
        <></>
      )}
      
    </>
  ) 
}

export default Navbar