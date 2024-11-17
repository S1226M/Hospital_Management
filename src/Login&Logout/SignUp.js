import React from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="login-page-container">
      <h2 className="login-form-title">Welcome! 😊</h2>
      <p className="login-subtitle">Please Create an Account below</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="login-input"
        />
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
        <button className="signup-btn" type="submit">
          Sign Up
        </button>
      </form>
      <div className="form-footer">
        <p>
          Already have an account?{' '}
          <span className="signin-link" onClick={handleSignInClick}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
