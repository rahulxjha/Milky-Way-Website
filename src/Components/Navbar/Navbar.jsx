import React, { useState } from 'react';
import logo from '../../img/logo.png';
import '../Navbar/navbar.css';

function Navbar() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleAccountClick = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

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
            <a href="/account" onClick={handleAccountClick}>
              Account
            </a>
          </React.Fragment>
        </div>
      </React.Fragment>

      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Login</h2>
            <form>
              <label>
                Email:
                <input type="text" />
              </label>
              <br />
              <label>
                Password:
                <input type="password" />
              </label>
              <br />
              <button type="submit">Login</button>
            </form>
            <button onClick={closeLoginModal}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
