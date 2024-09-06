import React from 'react';
import '../styling/Mission.css'; // Import the CSS file
import { FaBullhorn, FaChartLine, FaHandshake } from 'react-icons/fa'; // Example icons from react-icons

const Mission = () => {
  return (
    <section className="mission-section mission" id="mission">
      <h3 className="mission-heading">Our Goals</h3>
      <div className="mission-cards">
        <div className="mission-card">
          <div className="mission-card-icon"><FaBullhorn /></div>
          <h3 className="mission-card-title">Education</h3>
          <p className="mission-card-description">
            We aim to provide in-depth knowledge and training on trading and finance, empowering students with the skills they need to succeed.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-card-icon"><FaChartLine /></div>
          <h3 className="mission-card-title">Growth</h3>
          <p className="mission-card-description">
            We foster a growth-oriented environment where students can improve their trading strategies and stay updated with market trends.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-card-icon"><FaHandshake /></div>
          <h3 className="mission-card-title">Community</h3>
          <p className="mission-card-description">
            We build a supportive community where students can collaborate, share insights, and network with like-minded individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
