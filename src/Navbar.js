import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DHAGAD'S BLOG</h1>
      <div className="links">
        <Link to="/">Login</Link>
        <hr />
        <Link to="create">Create</Link>
      </div>
    </nav>
  );
};
export default Navbar;
