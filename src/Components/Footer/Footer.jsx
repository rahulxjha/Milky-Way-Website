import React from 'react';
import './footer.css'
import logo from '../../img/logo.png';

function Footer() {
  return (
    <footer id='footer'>
      <img src={logo} alt='Milky Way Dairy logo' />
      <p className='footer-cont'>&copy; 2023 Milky Way Dairy. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;