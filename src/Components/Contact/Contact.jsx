import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <h1>Contact us</h1>
      <div id="contact-box">
        <form action="" method="get">
          <fieldset>
            <div className="form-group">
              <label htmlFor="">Name:</label><br /><input type="text" placeholder="Enter your name"></input><br />
            </div>
            <div className="form-group">
              <label htmlFor="">Email:</label><br /><input type="text" placeholder="Enter your email"></input><br />
            </div>
            <div className="form-group">
              <label htmlFor="">Tell us:</label><br /><textarea name="" id="" cols="30" rows="10"></textarea><br />
            </div>
            <button id='contact-btn'>Submit</button>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Contact