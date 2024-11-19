import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Layout.css';

function Layout({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the logged-in state to false
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="d-flex flex-column min-vh-100 layout-container">
      {/* Header */}
      <header className="row align-items-center border-bottom p-3 shadow-sm bg-white header-container">
        <div className="col-3 d-flex align-items-center justify-content-center">
          <h1 className="logo-text">Management LOGO</h1>
        </div>
        <div className="col">
          <nav>
            <ul className="nav justify-content-end nav-links">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/addPatient">
                  Add Patient
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/patientInfo">
                  Patient Info
                </Link>
              </li>
              <li className="nav-item">
                {
                  isLoggedIn ? 
                                (<span className="nav-link nav-link-custom" onClick={handleLogout}>Log Out</span>) 
                             :  (<Link className="nav-link nav-link-custom" to="/login">Login</Link>)
                }
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="text-center p-3 footer-container">
        <p>&copy; 2024 Hospital Management System</p>
      </footer>
    </div>
  );
}

export default Layout;
