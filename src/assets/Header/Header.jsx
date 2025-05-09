import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login/logout
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout logic
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
    } else {
      // Redirect to login page (You can replace this with your actual login page route)
      navigate('/admin');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="img-fluid" src="img/logo.png" alt="Hotel Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms/all">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/facility">
                Facilities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {isLoggedIn ? (
              // If logged in, show profile and logout button
              <button className="btn btn-warning fw-bolder" onClick={handleLoginLogout}>
                Logout
              </button>
            ) : (
              // If not logged in, show the login button
              <button className="btn btn-warning fw-bolder" onClick={handleLoginLogout}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
