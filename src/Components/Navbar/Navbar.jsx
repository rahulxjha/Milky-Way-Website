import React from 'react';
import logo from '../../img/logo.png';
import '../Navbar/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="product">Product</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="#">Account</a>
      </div>
    </nav>
  );
}

export default Navbar;