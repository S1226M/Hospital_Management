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
    <div className="layout-container d-flex">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo-text">Hospital Management</h2>
        <nav>
          <ul className="nav flex-column">
            <li>
              <Link className="nav-link nav-link-custom" to="/layout/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link nav-link-custom" to="/layout/addPatient">
                Add Patient
              </Link>
            </li>
            <li>
              <Link className="nav-link nav-link-custom" to="/layout/patientInfo">
                Patient Info
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">Doctor Management</span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/layout/">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/layout/">
                    Talk with Doctor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/layout/">
                    Doctor Schedule
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header-container">
          <h1 className='Title'>Welcome to the Hospital Management System</h1>
              <button onClick={handleLogout} className="btn logout-btn">
                Logout
              </button>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
