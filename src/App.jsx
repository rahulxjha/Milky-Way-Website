import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Home/Landing_Page';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
        <Navbar />
        <Landing_Page />
        <Products />
        <Contact />
    </div>
  )
}

export default App;