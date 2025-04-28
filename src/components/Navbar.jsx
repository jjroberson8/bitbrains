import React, { useState } from 'react';
import NavMenu from '../context/NavMenu';
import AccessibilityImage from '../assets/accessibilityLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';



function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let handleResizeWithTimeout = debounce(function() {
    if (window.innerWidth > 900 && openLinks) {
      toggleNavbar();
    }
  }, 10); 

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  window.addEventListener("resize", handleResizeWithTimeout); 

  return (
    <nav className='navbar' role='navigation'>
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
    </nav>
  )
}

export default Navbar
