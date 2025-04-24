import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer' role='contentinfo'>
      <div className='footerContent'>
        <p> &copy; 2025 Bit Brains Production</p>
        <p>All rights reserved</p>
        <p>Accessibility Matters</p>
        <Link to='/contact' className='contact-us'><p className='contact-us'>Contact us</p></Link>
        <p>Follow us on social media:</p>
      </div>
      <div className='socialMedia'>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} alt='Tiktok Logo'/>
          <span className="assistive-text"> Tiktok Link</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} alt='Twitter Logo'/>
          <span className="assistive-text"> Twitter Link</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} alt='Facebook '/>
          <span className="assistive-text"> Facebook Link</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} alt='Linkedin Logo'/>
          <span className="assistive-text"> Linkedin Link</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer
