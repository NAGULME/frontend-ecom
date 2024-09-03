import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import productsData from '@/data/productsData'; 

function Products() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [sortOption, setSortOption] = useState('Price : Low to High');
  const [searchQuery, setSearchQuery] = useState(''); // Added state for search query
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Only runs on the client
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const filterProducts = () => {
    let filteredProducts = productsData;

    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedCategory.includes(product.brand));
    }

    if (priceRange.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseInt(product.price, 10);
        return priceRange.some(range => price <= range);
      });
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === 'Price : High to Low') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Price : Low to High') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategory(prev =>
      checked ? [...prev, value] : prev.filter(category => category !== value)
    );
  };

  const handlePriceRangeChange = (e) => {
    const { value, checked } = e.target;
    setPriceRange(prev =>
      checked ? [...prev, parseInt(value, 10)] : prev.filter(range => range !== parseInt(value, 10))
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // No navigation or alerts, just update the cart state
  };

  const buyNow = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    router.push('/buy'); // Redirect to buy page
  };
  const goToProductDetails = (id) => {
    router.push(`/product/${id}`);
  };

  const filteredProducts = filterProducts();

  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>FILTER</div>
          <div>
            <div style={{ margin: '20px' }}>
              <p>Brands</p><hr />
              <input type="checkbox" id="python" value="Python" onChange={handleCategoryChange} style={{ margin: '10px' }} />
              <label htmlFor="python">PYTHON</label><br />
              <input type="checkbox" id="java" value="Java" onChange={handleCategoryChange} style={{ margin: '10px' }} />
              <label htmlFor="java">JAVA</label><br />
              <input type="checkbox" id="frontend" value="Frontend" onChange={handleCategoryChange} style={{ margin: '10px' }} />
              <label htmlFor="frontend">Frontend</label><br />
              <input type="checkbox" id="database" value="Database" onChange={handleCategoryChange} style={{ margin: '10px' }} />
              <label htmlFor="database">Data-Base</label><br />
              <input type="checkbox" id="nodejs" value="Node-Js" onChange={handleCategoryChange} style={{ margin: '10px' }} />
              <label htmlFor="nodejs">Node-Js</label><br />
            </div>
            <div style={{ margin: '20px' }}>
              <p>Price</p>
              <hr />
              <input type="checkbox" id="500" value="500" onChange={handlePriceRangeChange} style={{ margin: '10px' }} />
              <label htmlFor="500">Below 500</label><br />
              <input type="checkbox" id="1000" value="1000" onChange={handlePriceRangeChange} style={{ margin: '10px' }} />
              <label htmlFor="1000">Below 1000</label><br />
              <input type="checkbox" id="1500" value="1500" onChange={handlePriceRangeChange} style={{ margin: '10px' }} />
              <label htmlFor="1500">Below 1500</label><br />
              <input type="checkbox" id="2000" value="2000" onChange={handlePriceRangeChange} style={{ margin: '10px' }} />
              <label htmlFor="2000">Below 2000</label><br />
            </div>
          </div>
        </div>

        <div style={{ flex: 3, padding: '20px' }}>
          
          <div style={{display:'flex',justifyContent:'space-between'}}><div>
            <select name="type" id="type" value={sortOption} onChange={handleSortChange}>
              <option value="Price : Low to High">Sort By: Price : Low to High</option>
              <option value="Price : High to Low">Sort By: Price : High to Low</option>
              <option value="Best Discount">Best Discount</option>
              <option value="Popularity">Popularity</option>
            </select>
          </div> <div className='search'>
            <a style={{ display: 'flex', alignItems: 'center' }}>
           
             
              <input
                style={{ width: '20rem', height: '2rem', marginTop: '18px' }}
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery} // Controlled input
                onChange={handleSearchChange} // Handle input changes
              /> <img
                src="https://static.vecteezy.com/system/resources/previews/027/445/388/original/free-download-gaming-mascot-logo-realistic-photo-ai-generative-free-png.png"
                alt="logo"
                style={{ height: '4rem', width: '4rem', objectFit: 'cover' }}
              />
            </a>
          </div></div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '20px'
          }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{
                border: '1px solid #ddd',
                padding: '10px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '400px', // Set a fixed height for each card
                boxSizing: 'border-box', // Include padding and border in the height
                marginBottom: '20px' // Optional: add some space between cards
              }}>
               <div style={{ overflow: 'hidden' }}>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: '180px',
      height: '180px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',  // Smooth transition for zoom effect
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} // Zoom in on hover
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Revert zoom on mouse out
    onClick={() => goToProductDetails(product.id)}
  />
</div>

               <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div style={{
                  marginTop: 'auto', // Pushes the buttons to the bottom of the card
                  display: 'flex',
                  gap: '10px'
                }}>
                  <button onClick={() => addToCart(product)} type="button" className="btn btn-outline-danger">Add to Cart</button>
                  <button onClick={() => buyNow(product)} type="button" className="btn btn-outline-success">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
