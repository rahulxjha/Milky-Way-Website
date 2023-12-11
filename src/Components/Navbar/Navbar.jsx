import React, { useState, useEffect, useRef } from 'react';
import logo from '../../img/logo.png';
import '../Navbar/navbar.css';

function Navbar() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNum: '',
    address: '',
    email: '',
    password: '',
  });
  const modalOverlayRef = useRef(null);

  const toggleLoginModal = () => {
    setSignUpModalOpen(false);
    setLoginModalOpen((prev) => !prev);
  };

  const toggleSignUpModal = () => {
    setLoginModalOpen(false);
    setSignUpModalOpen((prev) => !prev);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8085/api/v1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phoneNum: formData.phoneNum,
          address: formData.address,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Signed up successfully!`);
        setFormData({
          name: '',
          phoneNum: '',
          address: '',
          email: '',
          password: '',
        });
        closeSignUpModal();
        console.log(result);
      } else {
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  const handleModalOverlayClick = (e) => {
    if (modalOverlayRef.current && !modalOverlayRef.current.contains(e.target)) {
      closeLoginModal();
      closeSignUpModal();
    }
  };

  useEffect(() => {
    if (isLoginModalOpen || isSignUpModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isLoginModalOpen, isSignUpModalOpen]);

  useEffect(() => {
    document.addEventListener('click', handleModalOverlayClick);

    return () => {
      document.removeEventListener('click', handleModalOverlayClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a className='user-info' onClick={toggleLoginModal}>
          Sign in
        </a>
        <a className='user-info' onClick={toggleSignUpModal}>
          Sign up
        </a>
      </div>

      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Welcome back!</h2>
            <form id='login-form'>
              <label>Email: <br /> <input type="text" /></label>
              <br />
              <label>Password: <br /> <input type="password" /></label>
              <br />
              <button id="sub-btn" type="submit">Sign in</button>
              <button id="close-btn" onClick={closeLoginModal}>Close</button>
            </form>
          </div>
        </div>
      )}

      {isSignUpModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Welcome! We're excited to have you on board.</h2>
            <form id='signup-form' onSubmit={handleSubmitSignUp}>
              <label>Name : <br /><input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/></label>
              <br />
              <label>Phone No. : <br /> <input type="text" value={formData.phoneNum} onChange={(e) => setFormData({...formData, phoneNum: e.target.value})}/></label>
              <br />
              <label>Address : <br /> <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}/></label>
              <br />
              <label>Email : <br /> <input type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/></label>
              <br />
              <label>Password : <br /> <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/></label>
              <br />
              <button id="sub-btn" type="submit">Sign up</button>
              <button id="close-btn" onClick={closeSignUpModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
