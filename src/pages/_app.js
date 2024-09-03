import { useEffect } from 'react';
import "@/styles/globals.css"; // Import your global CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js'); // Load Bootstrap JS only on the client side
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
