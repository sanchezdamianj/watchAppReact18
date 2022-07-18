import React from 'react';
import footerimg from '../assets/footer-bg.jpg'
import { Link } from 'react-router-dom';
import '../css/App.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${footerimg})`}}>
       <div className='footer__content container'>
          <div className="footer__content__logo">
              <div className="logo">
                     <img src={logo} alt="loguito" />
                     <Link to="/">Pelis Pela</Link>
              </div>
          </div>  

          <div className="footer__content__menus">
            <div className="footer__content__menu">
              <Link to="/">Home</Link>
              <Link to="/">Contact me</Link>
              <Link to="/">Term & Conditions</Link>
              <Link to="/">About me</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Premiun account</Link>
              <Link to="/">Privacy</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">Top famouse movies</Link>
              <Link to="/">Recent uploads</Link>
              <Link to="/">Get free pass</Link>
              <Link to="/">Follow us on Yt</Link>
            </div>
          </div>     
       </div>
    </div>
  )
}
export default Footer;