import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Home/Landing_Page';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
        <Navbar />
        <Landing_Page />
        <Products />
        <Contact />
        <Footer />
    </>
  )
}

export default App;