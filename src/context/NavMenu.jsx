import React from 'react'
import {Link} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookOpen, faClipboardQuestion,faCircleInfo, faStar} from '@fortawesome/free-solid-svg-icons';


/* Nav Links for the navbar because it is used in multiple places*/
function NavMenu() {
  return (
    <ul className='nav-menu'>
        <li><Link to='/'> <FontAwesomeIcon icon={faHouse} alt='Home icon'/> Home </Link></li>
        <li><Link to='/overview'><FontAwesomeIcon icon={faBookOpen} alt='Book icon'/> Overview </Link></li>
        <li><Link to='/showcase'><FontAwesomeIcon icon={faStar} alt='Star icon'/> Showcase </Link></li>
        <li><Link to='/quiz'><FontAwesomeIcon icon={faClipboardQuestion} alt='Clipboard icon'/> Quiz Yourself</Link></li>
        <li><Link to='/learnmore'><FontAwesomeIcon icon={faCircleInfo} alt='Info icon'/> Learn More </Link></li>
    </ul>
  )
}

export default NavMenu
