import React from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign-Up</h2>
        <p>Welcome! 😊</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" placeholder="Full Name" className="form-input" required/>
          <input type="email" placeholder="Email Address" className="form-input" required/>
          <input type="password" placeholder="Password" className="form-input" required/>
          <button type="submit" className="btn primary-btn" onClick={() => navigate('/layout')}>Sign Up</button>
        </form>
        <div className="form-footer">
          <p>
            Already have an account?{' '}
            <span onClick={() => navigate('/')} className="link-text">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;