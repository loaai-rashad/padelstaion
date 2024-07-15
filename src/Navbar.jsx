import React from 'react';
import './Navbar.css'
import logo from '/src/assets/logo.png';
import logoText from '/src/assets/logo-text.png';
const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="logo-container">
       <img src={logo} alt="Logo" className="logo" />
       <img src={logoText} alt="Logo" className="logoText" />
      </div>
     


    </nav>
  );
}

export default Navbar;