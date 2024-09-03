import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import productsData from '@/data/productsData';  // Adjust the path as necessary

function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product by ID
  const product = productsData.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Added to Cart!');
  };

  const buyNow = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    router.push('/buy');
  };

  return (
    <Layout>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-evenly',
          backgroundImage: 'url(https://res.cloudinary.com/dxi76chcp/image/upload/v1724158523/pexels-frostroomhead-7897470_ovy4kn.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh', // Ensure it covers the full viewport height
        }}
      >
       <div className='re' >
  <h1 style={{ marginLeft: '400px',textShadow:"0px 4px 60px rgba(0, 0, 0, 0.2)" }}>{product.name}</h1>
  <div style={{ overflow: 'hidden' }}>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: '240px',
      height: '250px',
      objectFit: 'cover',
      margin: '6rem',
      marginLeft: '300px',
      boxShadow: '0px 4px 60px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.5s ease',  // Smooth transition for hover effect
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Slight zoom on hover
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Revert zoom on mouse out
  />
</div>

  
</div>

        
        <div style={{marginTop:'130px',paddingRight:'220px'}}>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
      
          <button onClick={addToCart} type="button" className="btn btn-outline-danger">Add to Cart</button>
          <button onClick={buyNow} type="button" className="btn btn-outline-success" style={{ marginLeft: '10px' }}>Buy Now</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
