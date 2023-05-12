import React from 'react';
import logo from '../../img/logo.png';
import '../Navbar/navbar.css'

function Navbar() {
  return (
      <nav className="navbar">
        <React.Fragment>
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="navbar-center">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

          </div>
          <div className="navbar-right">
            <React.Fragment>
              <a>Account</a>
            </React.Fragment>
          </div>
        </React.Fragment>
      </nav>
  );
}

export default Navbar;


