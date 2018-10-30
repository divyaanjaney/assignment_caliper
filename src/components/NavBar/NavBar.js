import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <a className="active" href='#'><i class='fa fa-fw fa-home'></i> Home</a>
        <a href="#"><FontAwesomeIcon icon={'tachometer-alt'}/> Search</a>
        <a href="#"><i class={'shipping-fast'}></i> Contact</a>
        <a href="#"><i class={'chart-bar'}></i> Login</a>
        <a href="#"><i class={'users'}></i> Login</a>
        <a href="#"><i class={'cog'}></i>Settings</a>
      </div>
    );
  }
}