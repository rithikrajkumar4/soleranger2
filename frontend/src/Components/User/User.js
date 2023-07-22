import React, { useEffect, useState } from 'react'
import Navbar from '../modals/Navbar/Navbar'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Loader from "../../Components/Loader/loader";
import { useSelector } from 'react-redux';

function User() {

  const [user, setUser] = useState({})
  
  const [isUser,setIsUser] = useState(false); 
  const userDetails = useSelector((state)=>state.user.user) ;
  

  useEffect(()=> {
    //logic for getting a value from local storage stored under the key 'key'
    if(userDetails){
      setUser(userDetails) ;
      setIsUser(true) ;
    }  
  },[])

  return (
    <>
    
    <Navbar showMainNav={false} showLogo={false}/>
    <div className="container-user flex py-24 mx-auto md:mx-24 justify-center flex-col">

      <AccountCircleRoundedIcon sx={{ fontSize: 250 }} className='align-baseline self-center'/>

      {/* <hr /> */}
      {isUser ? (
          
          <>
          <div className="user__nameContainer mx-24 flex pt-5 font-poppins justify-center">
            <div className="user__email text-base md:text-3xl"> Name : </div>
            <div className='text-base md:text-3xl pl-5 md:pl-7'> {user.user.name} </div>
          </div>

          <div className="user__emailContainer mx-24 flex pt-4 font-poppins justify-center">
            <div className="user__email text-base md:text-3xl"> Email : </div>
            <div className='text-base md:text-3xl pl-5 md:pl-7'> {user.user.email} </div>
          </div>


          <div className="user__roleContainer mx-24 flex pt-4 font-poppins justify-center">
            <div className="user__email text-base md:text-3xl"> Role : </div>
            <div className='text-base md:text-3xl pl-5 md:pl-7'> {user.user.role} </div>
          </div>
          

          <div className="button__container mx-auto">
            <button className="change__pass my-8 py-2 px-2 font-poppins text-white bg-red-800 rounded-xl"> Change Password </button>
          </div>
          </>

      ) : (<> <Loader/> </>)}
      

        

    </div>
    
    </>
  )
}

export default User


