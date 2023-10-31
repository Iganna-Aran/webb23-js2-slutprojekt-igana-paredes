
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Cart} from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './components/ShopContext';
import { ProductPage } from './components/ProductPage';

function App() {
  
  return (
      <div className="App">
        <ShopContextProvider>
    <Router>
      <Navbar />
        <Routes>      
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductPage />} />         
        </Routes>
    </Router>
    </ShopContextProvider>
      </div>
  );
}

export default App;

