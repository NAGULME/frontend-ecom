// pages/confirmation.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Confirmation = () => {
  const router = useRouter();

  // Optionally retrieve data from localStorage or context if needed
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      console.error('Failed to parse cart data:', error);
      return [];
    }
  });

  // Clear cart data from localStorage or context if needed
  React.useEffect(() => {
    localStorage.removeItem('cart');
    setCart([]);
  }, []);

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been successfully processed. We will send you a confirmation email shortly.</p>
        
        {/* Optionally show order details */}
        {cart.length > 0 && (
          <div>
            <h2>Order Summary</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {cart.map(product => (
                <li
                  key={product.id}
                  style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <div style={{ marginLeft: '10px' }}>
                    <h3 style={{ margin: '0' }}>{product.name}</h3>
                    <p style={{ margin: '0' }}>Price: ${product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
     
        
        <button
          onClick={() => router.push('/')}
          className="btn btn-primary"
        >
          Go to Home
        </button>
      </div>
    </Layout>
  );
};

export default Confirmation;
