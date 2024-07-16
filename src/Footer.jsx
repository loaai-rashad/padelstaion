import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Contact Us</h3>
      <div className="content">
        <div className="social-links">
          <a
            href="https://www.instagram.com/padel_station_eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
          </a>
        </div>

        <div className="phone">
          <p>01094469111</p>
          <p>01005754966</p>
          <p>01006039979</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
