import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  }, []);

  return (
    <Link href="/cart">
      <button style={{ width: '3rem', position: 'relative' }} className="glow-effect">
        <i className="bi bi-cart-check-fill">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
          </svg>
        </i>
        {cartCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-10px',
            
            right: '0',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '0 5px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {cartCount}
          </span>
        )}
            <style jsx>{`
  .glow-effect {
    transition: color 0.3s ease, text-shadow 0.3s ease;
    border: none;
    color:white;
    background: none;
    cursor: pointer;
    outline: none;
  }

  .glow-effect:hover {
    color: red;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
  }

  .glow-effect i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`}</style> 
      </button>
    </Link>
  );
};

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img 
    src="https://res.cloudinary.com/dxi76chcp/image/upload/v1724758671/n_lgtpfr.png" 
    alt="company logo" 
    style={{ height: '80px', width: 'auto', filter: 'invert(100%)' }} 
  />
  <h1 style={{ marginLeft: '10px' }}>website</h1>
</div>

      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginRight: '15px' }} className="glow-effect">
            <Link href="/" className="menu" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ marginRight: '15px' }} className="glow-effect">
            <Link href="/about" style={{ textDecoration: 'none' }}>About</Link>
          </li>
          <li style={{ marginRight: '15px' }} className="glow-effect">
            <Link href="/products" style={{ textDecoration: 'none' }}>Products</Link>
          </li>
          <li style={{ marginRight: '15px' }} className="glow-effect">
            <Link href="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
          </li>
        </ul>
        <style jsx>{`
          .glow-effect {
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }

          .glow-effect:hover {
            color: red;
            text-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
          }
        `}</style>
      </nav>
      
      <div>
        <Link href="/login">
          <button style={{ width: '3rem' }} className="glow-effect">
            <i className="bi bi-box-arrow-in-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
              </svg>
            </i>
          </button>
        </Link>
        <CartButton />
        <style jsx>{`
  .glow-effect {
    transition: color 0.3s ease, text-shadow 0.3s ease;
    border: none;
    color:white;
    background: none;
    cursor: pointer;
    outline: none;
  }

  .glow-effect:hover {
    color: red;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
  }

  .glow-effect i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`}</style>
      </div>
    </header>
  );
};

export default Header;
