import React from 'react';
import {Link} from 'react-router';
import AccessibilityImage from '../assets/accessibilityLogo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={AccessibilityImage} alt='Website Logo'/>
        </div>
        <div className='rightSide'>
          <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/overview'> Overview </Link></li>
            <li><Link to='/showcase'> Showcase </Link></li>
            <li><Link to='/quiz'> Quiz Yourself</Link></li>
            <li><Link to='/learnmore'> Learn More </Link></li> 
          </ul>
        </div>
    </div>
  )
}

export default Navbar
