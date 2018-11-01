import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faShippingFast, faChartBar, faUsers, faCog } from '@fortawesome/fontawesome-free-solid';
import './NavBar.css';

library.add(faTachometerAlt, faShippingFast, faChartBar, faUsers, faCog);

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <a href='#' className='textHidden'><FontAwesomeIcon icon=''/><span></span>hjssh</a>
        <a href='#' className='active'><FontAwesomeIcon icon={faTachometerAlt}/><span>Dashboard</span></a>
        <a href="#"><FontAwesomeIcon icon={faShippingFast}/><span>Trips</span></a>
        <a href="#"><FontAwesomeIcon icon={faChartBar}/><span>Tracking</span></a>
        <a href="#"><FontAwesomeIcon icon={faUsers}/><span>Transporters</span></a>
        <a href="#"><FontAwesomeIcon icon={faChartBar}/><span>Analytics</span></a>
        <a href="#" className='lastItemPadding'><FontAwesomeIcon icon={faCog}/><span>Settings</span></a>
      </div>
    );
  }
}

export default Navbar;