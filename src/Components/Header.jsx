import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header" style={{ position: 'relative' }}>
      <IoIosMenu className="menu-icon" onClick={() => setMenuOpen(true)} />
      <h2 className="logo">audiophile</h2>

      
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <Link to="/cart">
          <FaCartShopping
            className="cart-icon"
            style={{ fontSize: '22px', color: 'white' }}
          />
        </Link>

        {cartCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-2px',
              right: '3px',
              backgroundColor: '#D87D4A',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            {cartCount}
          </span>
        )}
      </div>

    
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
