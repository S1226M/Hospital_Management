import React from 'react';
import './SignIn&SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [data , setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/*url from server side*/',{name, email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="form-title">Sign-Up</h2>
        <p>Welcome! 😊</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" placeholder="Full Name" className="form-input" onChange={(e)=>setData({ ...data, fullName: e.target.value })} />
          <input type="email" placeholder="Email Address" className="form-input" onChange={(e)=>setData({ ...data, email: e.target.value })} />
          <input type="password" placeholder="Password" className="form-input" onChange={(e)=>setData({ ...data, password: e.target.value })} />
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