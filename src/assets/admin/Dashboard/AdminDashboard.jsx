import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import AdminHome from './AdminHome';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home'); // Manage active tab

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleTabChange('home')}
              >
                <i className="fas fa-tachometer-alt"></i> Overview
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'rooms' ? 'active' : ''}`}
                onClick={() => handleTabChange('rooms')}
              >
                <i className="fas fa-bed"></i> Manage Rooms
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => handleTabChange('bookings')}
              >
                <i className="fas fa-bookmark"></i> Manage Bookings
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => handleTabChange('users')}
              >
                <i className="fas fa-users"></i> Manage Users
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => handleTabChange('settings')}
              >
                <i className="fas fa-cogs"></i> Settings
              </button>
            </li>
            <li>
              <Link to="/logout" className="nav-link">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main-content">
        {/* Tab Content */}
        <div className="tab-content" id="v-pills-tabContent">
          {activeTab === 'home' && (
            <div className="tab-pane fade show active" id="v-pills-home">
           <AdminHome />

            </div>
          )}

          {activeTab === 'rooms' && (
            <div className="tab-pane fade show active" id="v-pills-rooms">
              <h3>Manage Rooms</h3>
              <p>Overview of managing rooms...</p>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="tab-pane fade show active" id="v-pills-bookings">
              <h3>Manage Bookings</h3>
              <p>Overview of managing bookings...</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="tab-pane fade show active" id="v-pills-users">
              <h3>Manage Users</h3>
              <p>Overview of managing users...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="tab-pane fade show active" id="v-pills-settings">
              <h3>Settings</h3>
              <p>Overview of settings...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
