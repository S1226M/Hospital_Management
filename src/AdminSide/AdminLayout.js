import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import './AdminLayout.css';

function AdminLayout() {
  const location = useLocation();

  return (
    <div className="admin-layout">
      {/* Sidebar or Navigation */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin/adminDashboard" className={location.pathname === "/admin/adminDashboard" ? "active" : ""}>Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/addDoctor" className={location.pathname === "/admin/addDoctor" ? "active" : ""}>Add Doctor</Link>
            </li>
            <li>
              <Link to="/admin/viewDoctor" className={location.pathname === "/admin/viewDoctor" ? "active" : ""}>View Doctor</Link>
            </li>
            <li>
              <Link to="/admin/addStaff" className={location.pathname === "/admin/addStaff" ? "active" : ""}>Add Staff</Link>
            </li>
            <li>
              <Link to="/admin/viewStaff" className={location.pathname === "/admin/viewStaff" ? "active" : ""}>View Staff</Link>
            </li>
            <li>
              <Link to="/admin/manageDepartment" className={location.pathname === "/admin/manageDepartment" ? "active" : ""}>Manage Departments</Link>
            </li>
            <li>
              <Link to="/admin/allPatientInformation" className={location.pathname === "/admin/allPatientInformation" ? "active" : ""}>All Patient Information</Link>
            </li>
            <li>
              <Link to="/admin/addPatientFromAdmin" className={location.pathname === "/admin/addPatientFromAdmin" ? "active" : ""}>Add Patient</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin-content">
        <h1>Welcome, Admin</h1>
        <Outlet /> {/* Displays child components like Dashboard, Add Staff, etc. */}
      </main>
    </div>
  );
}

export default AdminLayout;
