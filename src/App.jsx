import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Home/Landing_Page';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
      <div>
        <Navbar />
        <Landing_Page />
        <Products />
        <Footer />
      </div>
  );
}

export default App;