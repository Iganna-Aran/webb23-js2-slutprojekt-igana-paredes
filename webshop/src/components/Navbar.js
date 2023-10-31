import style from "./style.css";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // navbar komponent men länkning till Home och kundvagnen
  return (
    <nav>
      <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/cart">Shopping Cart</Link>
      </div>
    </nav>
  );
}


export default Navbar;