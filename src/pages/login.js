import React, { useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  // State hooks to manage form inputs and submission status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Simulate form submission
    try {
      // Replace with actual login logic
      if (email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout> <div className="container" style={{ maxWidth: '500px', marginTop: '100px' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="text-center mt-3">
              <p>
                <a href="/forgot-password" className="btn btn-link">Forgot Password?</a>
              </p>
              <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div></Layout>
   
  );
}

export default LoginPage;
