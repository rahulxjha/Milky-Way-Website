import React from 'react';
import logo from '../../img/logo.png';
import '../Navbar/navbar.css';
import { useSmoothScroll } from '../SmoothScroll';

function Navbar() {
  useSmoothScroll();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul>
          <li><a href="/Landing_Page">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#">Account</a>
      </div>
    </nav>
  );
}

export default Navbar;