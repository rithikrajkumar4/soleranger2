import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Navbar.css'

function Navbar() {
  return (
    <div className='container-fluid prenav'>
        <nav className='prenavBar'>
          <div className="nav__search">
            <input type="text" placeholder='Search Here' className="nav__searchInput" />
            <SearchIcon className='nav__searchIcon'/>
          </div>
          <div className="nav__rightSide">
            <div className="nav__user nav__icons">
              <AccountCircleOutlinedIcon sx={{ fontSize: 28 }}/>
            </div>

            <div className="nav__cart nav__icons">
                <ShoppingCartOutlinedIcon className='nav__shopCart'  sx={{ fontSize: 28 }}/>
            </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar