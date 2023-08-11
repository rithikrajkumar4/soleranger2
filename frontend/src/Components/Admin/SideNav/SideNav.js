import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideNav() {
    const navigate = useNavigate() ;

    return (
        <div className='side__nav pt-24 pl-6 flex flex-col text-md border-r-2 pr-6 min-h-screen'>
            <div className="mb-3 font-bold font-poppins text-gray-700 cursor-pointer" onClick={()=>{ navigate('/admin/orders')}}> Orders </div>
            <div className="mb-3 font-bold font-poppins text-gray-700 cursor-pointer" onClick={()=>{navigate('/admin')}}> Products </div>
            <div className="mb-3 font-bold font-poppins text-gray-700 cursor-pointer" onClick={()=>{navigate('/admin/stocks')}}> Stocks </div>
            <div className="mb-3 font-bold font-poppins text-gray-700 cursor-pointer" onClick={()=>{navigate('/admin/users')}}> Users </div>
        </div>
  )
}

export default SideNav