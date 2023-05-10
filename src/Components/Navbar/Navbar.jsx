import React from 'react';
import logo from '../../img/logo.png'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <Router>
    <nav className="navbar">
      <React.Fragment>
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              <Link to="/landing-page">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <React.Fragment>
            <Link to="/account">Account</Link>
          </React.Fragment>
        </div>
      </React.Fragment>
    </nav>
    </Router>
  );
}

export default Navbar;


