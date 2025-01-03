import React , { useState } from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignIn({ setIsLoggedIn }) {
  const [data, setData] = useState({
    email: '',
    password: '',

  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(data.email === 'admin123@gmail.com' && data.password === 'admin@123'){
      navigate('/admin')
      setIsLoggedIn(true);
    }
    else{
      navigate('/layout/home');
    }
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign-In</h2>
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
          <input type="email" placeholder="Email Address" className="form-input" onChange={(e) => setData({ ...data, email: e.target.value })}/>
          <input type="password" placeholder="Password" className="form-input" onChange={(e) => setData({ ...data, password: e.target.value })}/>
          <div className="options-container">
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button type="submit" className="btn primary-btn">Sign In</button>
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