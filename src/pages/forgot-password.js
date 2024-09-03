import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../components/Layout';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace with actual API for password reset request
      const response = await axios.post('/api/forgot-password', { email });
      if (response.data.success) {
        setSuccess('Password reset instructions have been sent to your email.');
      } else {
        throw new Error(response.data.message);
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
          <h5 className="card-title text-center">Forgot Password</h5>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
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
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? 'Sending Instructions...' : 'Send Instructions'}
            </button>
          </form>
          <div className="text-center mt-3">
            <p>Remembered your password? <a href="/login">Login</a></p>
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </div>
      </div>
    </div></Layout>
   
  );
}

export default ForgotPasswordPage;
