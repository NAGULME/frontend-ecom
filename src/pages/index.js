import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import products from '@/data/productsData'; 
import 'bootstrap/dist/css/bootstrap.min.css';




const Home = () => {
  const router = useRouter();
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      console.error('Failed to parse cart data:', error);
      return [];
    }
    
  });
  



  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleViewCart = () => {
    router.push('/cart');
  };
  const goToProductDetails = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <Layout>
    {/* carouse by using bootstram i give inline css */}

    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://4kwallpapers.com/images/walls/thumbs/16018.png" className="d-block w-100" alt="First slide" style={{height: 'auto', maxHeight: '400px'}} />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZGwa6BKb_TT1zoteRTog7FXQAbxixJ6F-w&s" className="d-block w-100" alt="Second slide" style={{height: 'auto', maxHeight: '400px'}} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://media.licdn.com/dms/image/D5612AQE7bHlRvli0oA/article-cover_image-shrink_720_1280/0/1686912750013?e=2147483647&v=beta&t=gNPDA2IXN-n8KNykTDSX0hkR1-ZlBJnYJ5k5bC2KTFM" className="d-block w-100" alt="Third slide" style={{height: 'auto', maxHeight: '400px'}} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://external-preview.redd.it/13-4-v0-fl6qiwPOM_rzFKqBWNtvSwLzAeXkSuruc6CVdI-I4yw.jpg?width=1080&crop=smart&auto=webp&s=6526fb96804062f207ed3c34bfd35e54879944f9" className="d-block w-100" alt="Fourth slide" style={{height: 'auto', maxHeight: '400px'}} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fourth slide label</h5>
            <p>Some representative placeholder content for the fourth slide.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .carousel-item {
          transition: transform 2s ease-in-out; /* 2-second transition effect */
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        }
        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          background-color: rgba(0, 0, 0, 0.8); /* Darker background on hover */
        }
        .carousel-caption h5, 
        .carousel-caption p {
          color: white; /* White text color for captions */
        }
      `}</style>
    </div>


<hr></hr>

{/* 4 parts  */}
<div style={{display:'flex', justifyContent:'space-between',alignContent:'center', textAlign:'center',marginTop:'5rem '}}>
 <div style={{flex:1, borderRight:'1px solid red'}}>
  <p style={{color:'red'}}>01</p>
  <h2>Online order</h2>
 <p>Share some details here. This is Flexible section where you can share anything you want.</p>
 </div>
 <div style={{flex:1, borderRight:'1px solid  red'}}>
 <p style={{color:'red'}}>02</p>
  <h2>Free Shipping</h2>
 <p>Share some details here. This is Flexible section where you can share anything you want.</p>
 </div>
 <div style={{flex:1, borderRight:'1px solid red'}}>
 <p style={{color:'red'}}>03</p>
  <h2>More Freshness</h2>
 <p>Share some details here. This is Flexible section where you can share anything you want.</p>
 </div>
 <div style={{flex:1, borderright:'1px solid red'}}>
 <p style={{color:'red'}}>01</p>
  <h2>Safe Payments</h2>
 <p>Share some details here. This is Flexible section where you can share anything you want.</p>
 </div>

</div> <hr></hr>
   {/* About  Florist */}
   <div style={{ display:'flex',alignItems:'center',height: '300px' ,marginTop:'5rem ',backgroundColor:'rgb(254,247,245)'}}>
<div style={{flex:1,display:'flex',justifyContent:'space-between',paddingRight: '20px',borderRight: '2px solid red'}}> 
<img src="https://media.licdn.com/dms/image/D5612AQEuHVFY24q4Ww/article-cover_image-shrink_720_1280/0/1683948050627?e=2147483647&v=beta&t=_SXcuR3UStv4GudpV0VYXriNwKuEcfPBtnMzHBNCg5g" alt="img1" style={{width:"40%"}} />
<img src="https://img.freepik.com/premium-photo/cyber-digital-world-android-robot-pointing-finger-computer-coding-ai-chatbot-background_629685-1222.jpg" alt="img2" style={{width:'40%'}}/>
</div>
<div style={{flex: 1, paddingLeft: '20px'  }}>
<p style={{ color: 'red' }}>About Florist</p>
<h2>Blossoming Your Special Moments with Nature's Finest</h2>
<p>Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
<button type="button" className="btn btn-outline-danger" href=".">Read More</button>
</div>
 </div>


{/* product top 8  */}
<div style={{ padding: '20px' }}>
    <h1>Welcome to Our Store</h1>

    {/* Top 8 Products */}
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products
        .sort((a, b) => a.id - b.id) // Sort the products based on their IDs in ascending order
        .slice(0, 8) // Take the top 8 products
        .map(product => (
          <div
            key={product.id}
            style={{
              margin: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              width: 'calc(25% - 40px)',
            }}
          >
            <div
              className="product-image-wrapper"
              onClick={() => goToProductDetails(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            </div>

            <style jsx>{`
              .product-image-wrapper {
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }

              .product-image-wrapper:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              }

              .product-image-wrapper img {
                display: block;
                width: 100%;
                height: 100%;
                transition: opacity 0.3s ease;
              }

              .product-image-wrapper:hover img {
                opacity: 0.8;
              }
            `}</style>

            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              type="button"
              className="btn btn-outline-danger"
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>

    <button
      onClick={handleViewCart}
      type="button"
      className="btn btn-secondary"
      style={{ marginTop: '20px' }}
    >
      View Cart
    </button>
  </div>



{/* new arrival */}
<div style={{backgroundColor:'black',display:"flex",justifyContent:'space-between',alignItems:'center',padding:'2rem',marginTop:'5rem '}}>
<div style={{height:'40rem',display:'flex',flexDirection:'column',flex:1,padding:'2rem'}}>
<p style={{color:'red'}}>Our Story</p>
<div style={{color:'whitesmoke',display:'flex',flexDirection:'column',justifyContent:"center",flex:'1'}}>
<h3>A Journey from Passion to Florist</h3>
<p> Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story 
  of our founder's deep-rooted love for flowers and how it led to the creation of your trusted floral destination. 
  It is a long established fact that a reader will be distracted by the readable content of a page when looking 
  at its layout.</p>
<p>
Explore the tale of dedication, creativity, and a vision to spread the joy of nature’s beauty through the art 
  of floral design. Discover the moments that shaped our founder’s path and paved the way for Florist to become 
  a symbol of floral excellence.<br />
</p>
<a href='/products'><button type="button" class="btn btn-outline-danger" >Product</button></a>

</div>
</div > 

<div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>

<img src='https://www.unite.ai/wp-content/uploads/2022/07/Python-Libraries-used-for-Graphical-User-Interface.png'
alt='Python Libraries' style={{maxWidth:'100%',maxHeight:'100%',objectFit:'cover',borderRadius:'50%'}} className='wrapper'/>
 
</div>



</div>
{/* best sell */}
<div style={{textAlign:'center',marginTop:'5rem '}}>
<p style={{color:'red'}}>BEST SELLING</p>
<h3>Blossom with the Best Our Top-Selling</h3>
<h3>Flowers</h3>
<p>Share some details here. This is Flexible section where you can share anything you want.</p>
</div>

{/* product after 8-16  */}
<div style={{ padding: '20px' }}>
<h1>More Products</h1>

{/* Remaining Products */}
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
{products.slice(8,16).map(product => (
<div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: 'calc(25% - 40px)' }}>
<div
  className="product-image-wrapper"
  onClick={() => goToProductDetails(product.id)}
>
  <img
    src={product.image}
    alt={product.name}
    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
  />
</div>

<style jsx>{`
  .product-image-wrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .product-image-wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .product-image-wrapper img {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
  }

  .product-image-wrapper:hover img {
    opacity: 0.8;
  }
`}</style>

  <h3>{product.name}</h3>
  <p>Price: ${product.price}</p>
  <button
    onClick={() => handleAddToCart(product)}
    type="button"
    className="btn btn-outline-danger"
  >
    Add to Cart
  </button>
</div>
))}
</div>

<button
onClick={handleViewCart}
type="button"
className="btn btn-secondary"
style={{ marginTop: '20px' }}
>
View Cart
</button>
</div>

 {/* TESTIMONAIL */}
 
 <div style={{ position: 'relative', overflow: 'hidden' ,color:'white'}}>
{/* Video Background */}
<video
  src="https://res.cloudinary.com/dxi76chcp/video/upload/v1724152186/blue_stream_curve_line_particles_pack_mweatd.mov"
  autoPlay
  muted
  loop
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  }}
/>

{/* Content */}
<div style={{ position: 'relative', padding: '2rem' }}>
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
    <p style={{ color: 'red' }}>TESTIMONIAL</p>
    <h3 style={{color:'white'}}>Hear From Our Happy Customers</h3>
    <p>Share some details here. This is a flexible section where you can share anything you want.</p>
  </div>
  
  <div style={{display:'flex',justifyContent:'space-between'}}>
{/* 1 */}
<div style={{ textAlign: 'center', padding: '20px' }}>
{/* Stars */}
<div style={{ marginBottom: '10px' }}>
<i className="bi bi-star">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
</i>
</div> <hr style={{color:'white'}}/>

{/* Review */}
<div style={{ marginBottom: '20px' }}>
<p>
I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
</p>
</div>

{/* Author */}
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<div style={{ marginRight: '20px' }}>
<img 
  src='https://res.cloudinary.com/dxi76chcp/image/upload/v1705477812/IMG-20231201-WA0001_ehdbsd.jpg' 
  alt='Shaik Nagul Meera' 
  style={{ borderRadius: '50%', height: '3rem' }}
/>
</div>
<div>
<h5>Shaik Nagul Meera</h5>
<p>Web Developer</p>
</div>
</div>
</div>
{/* 2 */}
<div style={{ textAlign: 'center', padding: '20px' }}>
{/* Stars */}
<div style={{ marginBottom: '10px' }}>
<i className="bi bi-star">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
</i>
</div> <hr style={{color:'white'}}/>

{/* Review */}
<div style={{ marginBottom: '20px' }}>
<p>
I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
</p>
</div>

{/* Author */}
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<div style={{ marginRight: '20px' }}>
<img 
  src='https://res.cloudinary.com/dxi76chcp/image/upload/v1705477812/IMG-20231201-WA0001_ehdbsd.jpg' 
  alt='Shaik Nagul Meera' 
  style={{ borderRadius: '50%', height: '3rem' }}
/>
</div>
<div>
<h5>Shaik Nagul Meera</h5>
<p>Web Developer</p>
</div>
</div>
</div>
{/* 3 */}
<div style={{ textAlign: 'center', padding: '20px' }}>
{/* Stars */}
<div style={{ marginBottom: '10px' }}>
<i className="bi bi-star">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
</i>
</div> <hr style={{color:'white'}}/>


{/* Review */}
<div style={{ marginBottom: '20px' }}>
<p>
I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
</p>
</div>

{/* Author */}
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<div style={{ marginRight: '20px' }}>
<img 
  src='https://res.cloudinary.com/dxi76chcp/image/upload/v1705477812/IMG-20231201-WA0001_ehdbsd.jpg' 
  alt='Shaik Nagul Meera' 
  style={{ borderRadius: '50%', height: '3rem' }}
/>
</div>
<div>
<h5>Shaik Nagul Meera</h5>
<p>Web Developer</p>
</div>
</div>
</div>

{/* 4 */}


</div>
</div>
</div>

{/* new arrival */}
<div style={{position: 'relative', overflow: 'hidden',height:'100vh',marginTop:'5rem',marginBottom:'3rem'}}>
<video 
autoPlay 
loop 
muted 
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
objectFit: 'cover',
zIndex: -1,
}}
>
<source src="https://res.cloudinary.com/dxi76chcp/video/upload/v1724153475/3163534-uhd_3840_2160_30fps_dhfhnm.mp4" type="video/mp4" />
</video>

<div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: '2rem', marginTop: '3rem'}}>
<div style={{height: '40rem', display: 'flex', flexDirection: 'column', flex: 1, padding: '2rem'}}>
<p style={{color: 'red'}}>Call to action</p>
<div style={{color: 'whitesmoke', display: 'flex', flexDirection: 'column', justifyContent: "center", flex: '1'}}>
  <h3>Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms</h3>
  <a href='/products'><button type="button" className="btn btn-outline-danger">Product</button></a>
</div>
</div> 

<div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'13rem'}}>
<img src='https://static.vecteezy.com/system/resources/previews/002/099/451/non_2x/ai-artificial-intelligence-and-machine-learning-concept-sphere-grid-wave-on-streaming-matrix-digital-binary-code-background-big-data-innovation-technology-neural-networks-vector.jpg' 
  alt='Python Libraries' style={{maxWidth:'100%',maxHeight:'100%',objectFit:'cover',borderRadius:'50%'}} className='wrapper'/>
</div>
</div>
</div>

</Layout>
  );
};

export default Home;
