/* eslint-disable jsx-a11y/anchor-is-valid */
// UserHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserHomepage.css';

const UserHomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          
          <li><Link to="/create-meal">Create Meal</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Customer Service</Link></li>
        </ul>
      </nav>

      <div className="content">
        {/* Your homepage content goes here */}
        <h1>Welcome to our website!</h1>
        <p>This is a simple homepage with a navigation bar.</p>
      </div>
    </div>
  );
};

export default UserHomePage;
