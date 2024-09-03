// pages/buy.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Buy = () => {
  const router = useRouter();
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      console.error('Failed to parse cart data:', error);
      return [];
    }
  });

  const handleConfirmPurchase = () => {
    // Redirect to payment method selection page
    router.push('/payment-method');
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. Please add items to your cart before proceeding.</p>
        ) : (
          <div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {cart.map(product => (
                <li
                  key={product.id}
                  style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ marginLeft: '10px' }}>
                    <h3 style={{ margin: '0' }}>{product.name}</h3>
                    <p style={{ margin: '0',color:'green' }}>Price: ${product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={handleConfirmPurchase}
              type="button"
              className="btn btn-primary"
              style={{ marginTop: '20px' }}
            >
              Confirm Purchase
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Buy;
