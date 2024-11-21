import React from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignIn({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/layout/home');
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign-In</h2>
        <p>Welcome! 😊</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="Email Address" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <div className="options-container">
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button type="submit" className="btn primary-btn">Sign In</button>
        </form>
        <div className="form-footer">
          <p>
            Don’t have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link-text">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;