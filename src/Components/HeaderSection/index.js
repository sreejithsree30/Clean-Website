import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import prof from "../../Assests/prof.png"

import serv from "../../Assests/serv.png"
import gurante from "../../Assests/gurante.png"

import "./index.css"

const HeaderSection = () => {
  return (
    <section className="header-section-conatiner">
      <h2>Why Choose Us</h2>
      <h1>Tradition of Trust</h1>
      <p>
        We specialize in intelligent & effective solutions and believe in the power of partnerships to grow business.
      </p>
      <div className="features">
        <div className="feature">
          <img className="serv-icon" src={prof} alt="prof" />
          <h3>Professional Team</h3>
          <p>Our team uses a sanitizing solution to wipe down light switches and doorknobs.</p>
        </div>
        <div className="feature">
        <img className="serv-icon" src={serv} alt="prof" />
          <h3>24/7 Services</h3>
          <p>We encourage our customers to let us know in advance of an appointment.</p>
        </div>
        <div className="feature">
        <img className="serv-icon" src={gurante} alt="prof" />
          <h3>Service Guarantee</h3>
          <p>We are selling our team members to wipe down surfaces with mops and cloths.</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
