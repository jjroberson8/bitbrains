import React from 'react';
import {Link} from 'react-router';
import AccessibilityImage from '../assets/accessibilityLogo.jpg';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={AccessibilityImage}/>
        </div>
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/overview'> Overview </Link>
            <Link to='/showcase'> Showcase </Link>
            <Link to='/quiz'> Quiz Yourself</Link>
            <Link to='/learnmore'> Learn More </Link>
        </div>
        
    </div>
  )
}

export default Navbar
