import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on social media:</p>
      <ul className='footer-links'>
        <li><a href="https://www.instagram.com/tradersatbphc" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://www.twitter.com/tradersatbphc" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.facebook.com/tradersatbphc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
      </ul>
      <p className="copyright">© 2024 Traders@BPHC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
