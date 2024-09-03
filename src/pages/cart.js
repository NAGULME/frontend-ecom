// pages/cart.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = React.useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push('/buy');
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {cart.map(product => (
                <li key={product.id} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              type="button"
              className="btn btn-primary"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
