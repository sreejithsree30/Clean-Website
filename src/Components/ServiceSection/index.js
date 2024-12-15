import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWindowRestore, faBuilding } from "@fortawesome/free-solid-svg-icons";

import hand from "../../Assests/hand.png"
import set1 from "../../Assests/blue-glass.png"
import bot from "../../Assests/bot.png"

import "./index.css"

const ServiceSection = () => {
  return (
    <section className="service-section">
      <h2>Why Choose Us</h2>
      <h1>Our Great Service</h1>
      <p>
        Restoring the beauty and freshness of your upholstered fabrics and take the load of
        housework for you.
      </p>
      <div className="services">
        <div className="service">
          <img className="servie-icons" src={hand} />
          <h3>Home Cleaning</h3>
          <p>Homes and thoroughly laundellihem between usage. We give our teams the accusantium doloremque laudantium.</p>
        </div>
        <div className="service">
          <img className="servie-icons" src={set1} />
          <h3>Windows Cleaning</h3>
          <p>We are closely monitoring national, state and local health agencies for the most recent developments.
          </p>
        </div>
        <div className="service">
          <img className="servie-icons" src={bot} />
          <h3>Office Cleaning</h3>
          <p>Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
