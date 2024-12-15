
import React from "react";
import cleaningImage from "../../Assests/clean.png"; 

import set1 from "../../Assests/set1.png"

import set2 from "../../Assests/set2.png"

import "./index.css"



const ImageTextSection = () => {
  return (
    <section className="image-text-section">
      <div className="image-container">
        {/* <img src={cleaningImage} alt="Cleaning" /> */}
          <div className="text-container">
            <h2>Made For You</h2>
            <h1>A Cleaner Place is a Safer Place.</h1>
            <p>
              With a cleaning service, we are a company dedicated to giving our customers back the
              time they deserve to enjoy the things they love.
            </p>
            <div className="features-cart">
              <div className="feature">
                <img className="set-image" src={set1} alt="set1" />
                <h3>Professional Cleaning</h3>
                <p>Responsibility is our middle name.</p>
              </div>
              <div className="feature">
                <img className="set-image" src={set2} alt="set1" />
                <h3>Fast and Efficient</h3>
                <p>Both of us take a lot of time in getting cleaned!</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
