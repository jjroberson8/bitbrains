import React, { useState } from 'react';
import NavMenu from './NavMenu';
import AccessibilityImage from '../assets/accessibilityLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';



function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

    const handleResize = () => {
      if (window.innerWidth > 900 && openLinks == true) {
        toggleNavbar();
      }
    }

  window.addEventListener("resize", handleResize); 

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
