import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Import the CSS file

function Layout() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 layout-container">

        {/* header */}
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
    </>
  );
}

export default Layout;