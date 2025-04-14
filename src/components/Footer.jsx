import React from 'react'
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <p> &copy; 2025 Bit Brains Production</p>
        <p>All rights reserved</p>
        <p>Accessibility Matters</p>
        <p>Follow us on social media:</p>
      </div>
      <div className='socialMedia'>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} alt='Tiktok Logo'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} alt='Twitter Logo'/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} alt='Facebook Logo'/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} alt='Linkedin Logo'/>
        </a>
      </div>
    </div>
  );
}

export default Footer
