import React, { useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace with actual registration API
      const response = await axios.post('/api/send-otp', { email });
      if (response.data.success) {
        setIsOtpSent(true);
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace with actual OTP verification API
      const response = await axios.post('/api/verify-otp', { email, otp });
      if (response.data.success) {
        setSuccess('Registration successful!');
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (<Layout><div className="container" style={{ maxWidth: '500px', marginTop: '100px' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{isOtpSent ? 'Verify OTP' : 'Register'}</h5>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={isOtpSent ? handleVerifyOtp : handleRegister}>
            {!isOtpSent ? (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
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
                  {loading ? 'Sending OTP...' : 'Register'}
                </button>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Verifying OTP...' : 'Verify OTP'}
                </button>
              </>
            )}
          </form>
          <div className="text-center mt-3">
            <p>Already have an account? <a href="/login">Login</a></p>
            <p><a href="/forgot-password" className="btn btn-link">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div></Layout>
    
  );
}

export default RegisterPage;
