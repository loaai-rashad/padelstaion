import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p>Contact us</p>
    
        <a href="https://www.instagram.com/padel_station_eg/" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
        </a>
        <h3>01094469111</h3>
        <h3>01005754966</h3>
        <h3>01006039979</h3>
      </div>
    </footer>
  );
};

export default Footer;