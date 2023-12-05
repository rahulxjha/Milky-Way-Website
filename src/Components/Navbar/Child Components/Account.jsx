import React, { useState } from 'react';

const Account = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleAccountClick = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handleAccountClick}>
              Account
            </a>
          </li>
        </ul>
      </nav>

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
    </div>
  );
};

export default Account;
