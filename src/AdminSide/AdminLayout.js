import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './AdminManagement.css'

function AdminLayout(){
    return (
        <div className="admin-layout">
          {/* Sidebar or Navigation */}
            <aside className="admin-sidebar">
                <h2>Admin Panel</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin/adminDashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/admin/addDoctor">Add Doctor</Link>
                        </li>
                        <li>
                          <Link to="/admin/viewDoctor">View Doctor</Link>
                        </li>
                        <li>
                          <Link to="/admin/addStaff">Add Staff</Link>
                        </li>
                        <li>
                          <Link to="/admin/viewStaff">View Staff</Link>
                        </li>
                        <li>
                          <Link to="/admin/manageDepartment">Manage Departments</Link>
                        </li>
                        <li>
                          <Link to="/admin/allPatientInformation">All Patient Information</Link>
                        </li>
                        <li>
                          <Link to="/admin/addPatientFromAdmin">Add Patient</Link>
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
