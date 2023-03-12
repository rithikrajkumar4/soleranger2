import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useNavigate} from 'react-router-dom'



function Footer() {
const navigate = useNavigate();

  return (
    <div className='footer' id='footer'>
        <div className="container-lg">
            <div className="row">
                <div className="col-md-3 col-12 text-center">
                    <h3 className="footer__heading">
                        LINKS
                    </h3>
                    <ul className="footer__links">
                        <li className="footer__item">About</li>
                        <li className="footer__item">Shop</li>
                        <li className="footer__item">SoleRangers</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 text-center">
                    <h3 className="footer__heading">
                        CONTACT US
                    </h3>
                    <div className="footer__contact ">
                        <ul className="footer__links">
                            <li className="footer__item"><a href="/"> solerangers@gmail.com </a></li>
                            <li className="footer__item">+91 1234566789</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-12 text-center">
                <h3 className="footer__heading">
                        LEGAL
                    </h3>
                    <ul className="footer__links">
                        <li className="footer__item">Terms and Conditions</li>
                        <li className="footer__item">Sellers Policy</li>
                        <li className="footer__item">Privacy Policy</li>
                        <li className="footer__item">Shipping Policy</li>
                        <li className="footer__item">Return Policy</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 " align='center'>
                <h3 className="footer__heading">
                        FOLLOW US
                    </h3>
                    <ul className="footer__links">
                        <li className="footer__item"><FacebookOutlinedIcon/> </li>
                        <li className="footer__item"> <a href="https://www.instagram.com/solerangers/?igshid=YmMyMTA2M2Y=">  <InstagramIcon/> </a> </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 footer__bottom" align='center'>
                    Copyrights &copy; 2023. <span onClick={() => navigate('/login')}>SoleRangers</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer