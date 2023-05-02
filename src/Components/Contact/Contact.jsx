import React from 'react';
import '../Contact/contact.css';
import { useState } from 'react';
import { useSmoothScroll } from '../SmoothScroll';

function ContactForm() {
  useSmoothScroll();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      message
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form data stored successfully:', data);
        // Do whatever you need to do after the data is stored
      })
      .catch(error => {
        console.error('Error storing form data:', error);
        // Handle the error
      });
  };

  return (
    <section id='contact'>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
