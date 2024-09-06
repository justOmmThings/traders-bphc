import React from 'react';
import '../styling/About.css'; // Import the CSS for styling
import vectorImage from '../assets/home_svg.jpg'; // Replace with the path to your vector image

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p>Traders@BPHC is a community of students at BITS Pilani Hyderabad Campus who are passionate about trading, finance, and the stock market. We aim to foster a learning environment for aspiring traders.</p>
        <button className="join-button">Join Us</button>
      </div>
      <div className="vector-image">
        <img src={vectorImage} alt="Vector Illustration" />
      </div>
    </section>
  );
};

export default About;
