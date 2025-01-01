import React, { useState } from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = data; // Destructure state
    axios
      .post('/*url from server side*/', { name, email, password })
      .then((res) => {
        console.log(res);
        navigate('/layout'); // Navigate on success
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Register</h2>
        <p>Welcome! 😊</p>
        <tr>
          <td className="form-table-cell">
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="User"
                  value="admin"
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="User"
                  value="staff"
                />
                Staff
              </label>
              <label>
                <input
                  type="radio"
                  name="User"
                  value="patient"
                />
                Patient
              </label>
            </div>
          </td>
        </tr>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="btn primary-btn">
            Sign Up
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