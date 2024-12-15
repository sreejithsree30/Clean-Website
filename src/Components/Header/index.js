import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";

import { faHandSparkles, faBroom, faHouse ,faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import image from "../../Assests/logo.png"

import "./index.css"; 

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-cart">
          <div className="contact-info">
            <span><FontAwesomeIcon className="font-icon" icon={faPhone} />+123-456-7890</span>
            <span><FontAwesomeIcon className="font-icon" icon={faEnvelope} />info@yourdomain.com</span>
          </div>
          <div className="icons-cart">
            <FontAwesomeIcon className="cart-icon" icon={faFacebookF} />
            <FontAwesomeIcon className="cart-icon" icon={faTwitter} />
            <FontAwesomeIcon className="cart-icon" icon={faInstagram} />
            <FontAwesomeIcon className="cart-icon" icon={faLinkedinIn} />  
            <button className="quote-button">GET A QUOTE</button>
          </div>
        </div>
        <nav className="navbar">
          <div className="logo1">
            <img src={image} alt="logo" />
            <h6>amiso</h6>
          </div>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PAGES</li>
            <li>GALLERY</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
      <div className="hero">
        <h6>RENEW YOUR LOOK</h6>
        <h1>A TRADITION OF <br /> QUALITY CLEANING</h1>
        <button className="contact-btn">Contact Us</button>
      </div>
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon"><FontAwesomeIcon icon={faHandSparkles} /></div>
          <h3>Professional Cleaning</h3>
          <p>
            Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><FontAwesomeIcon icon={faBroom} /></div>
          <h3>Fast and efficient</h3>
          <p>
            Our Aim Is to Keep the House Clean – Your Aim Will Help the thought Digital Innovation World Summit.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><FontAwesomeIcon icon={faHouse} /></div>
          <h3>Renew your look</h3>
          <p>Both of us take a lot of time in getting cleaned and beautified Clean Home.</p>
        </div>
      </section>
      <div className="info-cart">
        <section className="info">
          <h2>A Clean House is a Happy Place !</h2>
          <p>
            Washla has met the demands of a growing world.
          </p>
        </section>
        <section className="info">
          <p><span className="first-letter">W</span> ashla customers has a tremendous 
                   opportunity to answer the call of logistic needs across the globe. 
            Has 26 affiliated state soybean associations representing 30 soybean-producing state.
          </p>
        </section>
        <section className="info">
          <p>World's leading non-asset-based supply chain management companies, we design and implement industry-leading. 
          We specialise in intelligent & effective search and believes in the power of partnerships to grow business.</p>
        </section>

      </div>
    </div>
  );
}

export default Header;
