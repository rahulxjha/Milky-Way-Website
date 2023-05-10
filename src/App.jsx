import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Home/Landing_Page';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Navbar/Child Components/Cart';
import Account from './Components/Navbar/Child Components/Account'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/landing-page" component={Landing_Page} />
        <Route path="/product" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/account" component={Account} />

      </div>
    </Router>
  );
}

export default App;