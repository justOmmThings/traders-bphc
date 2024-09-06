import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styling/Navbar.css";
import Typewriter from 'typewriter-effect';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle screen resize
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);  // Ensure menu is closed on larger screens
    }
  };

  useEffect(() => {
    // Set initial screen size
    handleResize();
    // Add event listener on window resize
    window.addEventListener('resize', handleResize);
    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
            }}
          />
        </div>
        {/* Render nav links directly for desktop view */}
        {!isMobile && (
          <ul className="nav-links">
            <li><a href="#events">Events</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#mission">Goals</a></li>
          </ul>
        )}

        {/* Show hamburger only if on a small screen */}
        {isMobile && (
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </nav>

      {/* Overlay only appears on mobile */}
      {isMobile && (
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <ul className="overlay-links">
            <li><a href="#events" onClick={toggleMenu}>Events</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#mission" onClick={toggleMenu}>Goals</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
