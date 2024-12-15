import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";

import image from "../../Assests/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
        <div className="logo">
            <img src={image} alt="logo" />
            <h6>amiso</h6>
          </div>
          <p className='logo-desc'>
            Washla customers has a tremendous opportunity to answer the call of logistic.
          </p>
        </div>

        <div className="footer-section contact-section">
          <h3 className='footer-head'>Get In Touch</h3>
          <p>8273 NW 56th ST Miami, Florida, 33195 United States</p>
          <p>info@amiso.com</p>
          <p>052 5401 3322</p>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <div className='footer-lint-container'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Team</li>
            </ul>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Gallery</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Our Newsletter</h3>
          <p className='newsletter-para'>Subscribe to our newsletter to receive the latest news about our services.</p>
          <div className="newsletter-input">
            <input className='input-box' type="email" placeholder="Your email address" />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 amiso all rights reserved.</p>
        <div className="social-icons">
        <div className="icons-cart">
            <FontAwesomeIcon className="cart-icons" icon={faFacebookF} />
            <FontAwesomeIcon className="cart-icons" icon={faTwitter} />
            <FontAwesomeIcon className="cart-icons" icon={faInstagram} />
            <FontAwesomeIcon className="cart-icons" icon={faLinkedinIn} />  
            <button className="quote">^</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
