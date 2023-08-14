import React from 'react';

import Logo from '../../Assets/Logo/openstroke.svg';
import SearchIcon from '../../Assets/Icon/SearchIcon.svg';
import signIn from '../../Assets/Icon/sign-in.svg';
import './style.css'

const NavigationBarWeb = () => {
  return (
    <div class='Navbar'>
      <div className="NavbarInner">
        <div className="NavItem Logo"><img src={Logo} alt="SVG Image" /> <div className='Beta'>beta</div></div>
        <div className="NavItem Menu">
          <img src={SearchIcon} alt="SVG Search" />
          <div>ICONS</div>
          <div>STYLE SETS</div>
          <div>FEATURES</div>
          <div>PRICING</div>
        </div>
        <div className="SignIn">
          <img src={signIn} alt="SVG signIn"/>
          <div className='badge'></div>
        </div> 
      </div>
    </div>
  )
}

export default NavigationBarWeb