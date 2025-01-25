import React, { useState } from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({
    user: '',
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8000/register";

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Register</h2>
        <p>Welcome! 😊</p>
        <div className="user-options">
          <label className='lb'>
            <input
              type="radio"
              name="User"
              value="admin"
              onChange={(e) => setData({ ...data, user: e.target.value })}
            />
            Admin
          </label>
          <label className='lb'>
            <input
              type="radio"
              name="User"
              value="staff"
              onChange={(e) => setData({ ...data, user: e.target.value })}
            />
            Staff
          </label>
          <label>
            <input
              type="radio"
              name="User"
              value="patient"
              onChange={(e) => setData({ ...data, user: e.target.value })}
            />
            Patient
          </label>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="btn primary-btn" style={{marginLeft: '7px' , width : '250px'}}>
            Register
          </button>
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

export default Register;