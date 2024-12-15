import React from 'react';
import './index.css';

import lo from "../../Assests/clean.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import smile from "../../Assests/smile.png"
import house from "../../Assests/house.png"
import glass from "../../Assests/set1.png"
import rank from "../../Assests/rank.png"

import laura from "../../Assests/laura.png"
import martha from "../../Assests/martha.png"
import matt from "../../Assests/matt.png"

const WorkItems = () => {
  return (
    <div className="cleaning-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
        <div className="play-circle">
            <FontAwesomeIcon icon={faPlay} className="play-icon" />
        </div>
          <p>Cleaning your Worries Away</p>
          <h1>Need Help With Cleaning?</h1>
          <button className="call-button">Request Call Back</button>
        </div>

        <div className="stats-section">
          <div className="stat">
            <img className="icons-cart-section" src={smile} />
            <div className="stat-cart">
            <h2>385</h2>
            <p>Happy Customers</p>
            </div>
          </div>
          <div className="stat">
            <img className="icons-cart-section" src={house} />
            <div className="stat-cart">
              <h2>842</h2>
              <p>Houses Cleaned</p>
            </div>
          </div>
          <div className="stat">
            <img className="icons-cart-section" src={rank} /> 
            <div className="stat-cart">
              <h2>489</h2>
              <p>Awards Received</p>
            </div>
          </div>
          <div className="stat">
            <img className="icons-cart-section" src={glass} />
            <div className="stat-cart">
              <h2>1344</h2>
              <p>Glass Cleaned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="news-section">
        <div className="news-section-cart">
          <h6 className="news-title-sec">WHY CHOOSE US</h6>
          <h2 className="news-title">Recent News</h2>
          <p className="news-description">
            We specialise in intelligent & effective Search and believe in the power of <br /> partnerships to grow business.
          </p>
        </div>
        <div className="news-cards">
          <div className="card">
            <div className="card-date">12 Nov</div>
            <div className="card-content">
              <p className="card-tag">CLEANING</p>
              <h3>Temporary Ruling Issued</h3>
              <p className="card-des">Washla has met the demands of a growing world cleaning tremendous.</p>
              <div className="profile-cart">
                <img className="profile" src={martha} />
                <div className="profile-cart-section">
                  <p className="card-author">Martha Smith</p>
                  <p className="card-position">Washla CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="card-date">11 Nov</div>
            <div className="card-content">
              <p className="card-tag">CLEANING</p>
              <h3>The Expands California</h3>
              <p className="card-des">welcomed and every set perspicatis unde omnis iste natus.</p>
              <div className="profile-cart">
                <img className="profile" src={laura} />
                <div className="profile-cart-section">
                  <p className="card-author">Laura Jones</p>
                  <p className="card-position">Accounting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="card-date">10 Nov</div>
            <div className="card-content">
              <p className="card-tag">CLEANING</p>
              <h3>Temporary Ruling Issued</h3>
              <p className="card-des">Washla has met the demands of a growing world. The Cleaning.</p>
              <div className="profile-cart">
                <img className="profile" src={matt} />
                <div className="profile-cart-section">
                 <p className="card-author">Matt Ryan</p>
                 <p className="card-position">Lawyer</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default WorkItems;
