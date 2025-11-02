import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <IoIosMenu className="menu-icon" onClick={() => setMenuOpen(true)} />
      <h2 className="logo">audiophile</h2>
      <FaCartShopping className="cart-icon" onClick={handleCartClick} />

      <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/headphone" onClick={() => setMenuOpen(false)}>Headphones</Link></li>
          <li><Link to="/speaker" onClick={() => setMenuOpen(false)}>Speakers</Link></li>
          <li><Link to="/earphones" onClick={() => setMenuOpen(false)}>Earphones</Link></li>
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
