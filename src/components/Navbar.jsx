import React, { useState } from 'react';
import NavMenu from './NavMenu';
import AccessibilityImage from '../assets/accessibilityLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';



function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var handleResizeWithTimeout = debounce(function() {
    if (window.innerWidth > 900 && openLinks == true) {
      toggleNavbar();
    }
  }, 100); 

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  window.addEventListener("resize", handleResizeWithTimeout); 

  return (
    <div className='navbar' role='navigation'>
        <div className='leftSide' id={openLinks? "open" : "close"}>
          <img src={AccessibilityImage} alt='Website Logo'/>
          <h1 className='navbar-logo'> Bit Brains</h1>
          <div className='hiddenLinks'>
            <NavMenu/>
          </div>
        </div>

        {/*Add alts to the icons for accessibility */}
        <div className='rightSide'>
          <NavMenu/>
          <button className='links-btn' onClick={toggleNavbar} aria-label='Links Button'>
            <FontAwesomeIcon icon={faBars} size='2xl' alt='Bars icon'/>
          </button>
        </div>
    </div>
  )
}

export default Navbar
