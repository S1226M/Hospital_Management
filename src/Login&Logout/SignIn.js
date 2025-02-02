import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn&SignUp.css';

function SignIn({ setIsLoggedIn }) {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);

        // Navigate dynamically based on user role
        if (result.role === 'admin') {
          navigate('/admin');
        } else if (result.role === 'staff') {
          navigate('/staff-dashboard'); // Change route as needed
        } else {
          navigate('/layout/home');
        }
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Unable to connect to server.');
    }
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign-In</h2>
        <p>Welcome! 😊</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="form-input" 
            onChange={(e) => setData({ ...data, email: e.target.value })} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="form-input" 
            onChange={(e) => setData({ ...data, password: e.target.value })} 
            required 
          />
          <button type="submit" className="btn primary-btn" style={{ marginLeft: '7px', width: '250px' }}>
            Sign In
          </button>
        </form>
        <div className="form-footer">
          <p>
            Don’t have an account?{' '}
            <span onClick={() => navigate('/register')} className="link-text">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
