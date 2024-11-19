import React from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignIn({ setIsLoggedIn }) { // Accept setIsLoggedIn as a prop
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Set the logged-in state to true
    navigate('/layout/home'); // Navigate to the home page
  };

  return (
    <div className="login-page-container">
      <h2 className="login-form-title">Welcome! 😊</h2>
      <p className="login-subtitle">Please Sign in to your account below</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
        />
        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot-password">Forgot password?</span>
        </div>
        <button className="signin-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
