import React from "react";
import "./index.css";

import monica from "../../Assests/monica.png"
import jones from "../../Assests/jones.png"
import sara from "../../Assests/sara.png"

const teamMembers = [
  {
    id: 1,
    name: "Monica Gordon",
    role: "House Cleaning",
    image: monica, 
  },
  {
    id: 2,
    name: "Laura Jones",
    role: "Cleaner",
    image: jones, 
  },
  {
    id: 3,
    name: "Sara Ryan",
    role: "House Cleaner",
    image: sara, 
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>MEET OUR</h2>
        <h1>Our Team</h1>
        <p>
          The members of our highly experienced team are dedicated to providing
          you with only the best service we can possibly provide.
        </p>
      </div>
      <div className="team-grid">

        <div className="team-card-monica">
          <div className="team-info">
              <h3 className="monica">Monica Gordon</h3>
              <p className="monica-para">House Cleaning</p>
            </div>
        </div>

        <div className="team-card-jones">
          <div className="team-info">
              <h3>Laura Jone</h3>
              <p>Cleaner</p>
            </div>
        </div>

        <div className="team-card-sara">
          <div className="team-info">
              <h3>Sara Ryan</h3>
              <p>House Cleaner</p>
            </div>
        </div>
      </div>
      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default TeamSection;
