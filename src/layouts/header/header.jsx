import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='Navbar'>
      <div className="logo">
        <Link to='/home'> 
          <img src="logo.png" alt="Logo" /> 
        </Link>
      </div>
      <ul className='nav-links'>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/service'>Services</Link></li>
        <li><Link to='/studies'>Case studies</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/works'>How it works</Link></li>
        <li><Link to='/hire'>Hire</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
