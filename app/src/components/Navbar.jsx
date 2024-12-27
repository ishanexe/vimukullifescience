import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <img src="/log.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul>
        <li>
          <NavLink to="/" activeClassName="red">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="red">About</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="red">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="red">Contact</NavLink>
        </li>
      </ul>
      <li>
        <a href="https://wa.me/917489168824" target="_blank" rel="noopener noreferrer">
            <button class="icon-button"></button>
        </a>
    </li>

    </nav>
  );
}

export default Navbar;
