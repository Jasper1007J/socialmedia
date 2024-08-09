import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/profile">Profile</NavLink></li> */}
        {/* <li><NavLink to="/post">Create Post</NavLink></li> */}
        {!isAuthenticated ? (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </>
        ) : (
          <li><button onClick={logout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
