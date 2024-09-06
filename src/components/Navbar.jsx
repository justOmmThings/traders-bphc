import "../styling/Navbar.css"
import React from 'react';
import Typewriter from 'typewriter-effect'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Typewriter
        options={{
          loop: true
        }}
        onInit={(typewriter) => {
        typewriter.typeString('Traders@BPHC')
        .pause(2500)
        .deleteAll()
        .typeString("The Trading Hub")
        .start();
       }}/>
      </div>
      <ul className="nav-links">
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mission">Mission</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
