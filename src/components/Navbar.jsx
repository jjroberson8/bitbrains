import React from 'react';
import {Link} from 'react-router';
import AccessibilityImage from '../assets/accessibilityLogo.png';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookOpen, faClipboardQuestion,faCircleInfo } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <img src={AccessibilityImage} alt='Website Logo'/>
          <h1 className='navbar-logo'>Bit Brains</h1>
        </div>

        
        {/*Add alts to the icons for accessibility */}
        <div className='rightSide'>
        <ul className='nav-menu'>
            <Link to='/'> <FontAwesomeIcon icon={faHouse} alt='Home icon'/> Home </Link> 
            <Link to='/overview'><FontAwesomeIcon icon={faBookOpen} alt='Book icon'/> Overview </Link> 
            <Link to='/showcase'> Showcase </Link> 
            <Link to='/quiz'><FontAwesomeIcon icon={faClipboardQuestion} alt='Clipboard icon'/> Quiz Yourself</Link> 
            <Link to='/learnmore'><FontAwesomeIcon icon={faCircleInfo} alt='Info icon'/> Learn More </Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
