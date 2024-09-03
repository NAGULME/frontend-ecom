// pages/payment-method.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const PaymentMethod = () => {
  const router = useRouter();
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      console.error('Failed to parse cart data:', error);
      return [];
    }
  });

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

  const handleConfirmPayment = () => {
    // Redirect to a confirmation page or handle payment submission
    router.push('/confirmation'); // Change this to your actual confirmation page route
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Select Payment Method</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. Please add items to your cart before proceeding.</p>
        ) : (
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
                  <p style={{ margin: '0' }}>Price: <span style={{color:'green'}}>${product.price.toFixed(2)}</span> </p>
                </div>
              </li>
            ))}
          </ul>
         <hr/> 
         <h2 style={{ marginTop: '20px', textAlign: 'center' }}>
  Total Amount: <span style={{ color: 'green' }}>${totalPrice}</span>
</h2>

          <hr/>

          <h2>Payment Methods</h2>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label>
                <input type="radio" name="paymentMethod" value="creditCard" defaultChecked />
                Credit Card
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                <input type="radio" name="paymentMethod" value="paypal" />
                PayPal
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                <input type="radio" name="paymentMethod" value="bankTransfer" />
                Bank Transfer
              </label>
            </div>
            
            <button
              type="button"
              onClick={handleConfirmPayment}
              className="btn btn-outline-success btn-lg"
            >
              Confirm Payment
            </button>
          </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PaymentMethod;
