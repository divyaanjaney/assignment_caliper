import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const search = () => {
  return (
    <div className='row search-input'>
      <div className='col-md-4'>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input type='text' className='input-text' placeholder='Select transporter'/>
        <FontAwesomeIcon icon={faCaretDown} className='search-card'/>
      </div>
      <div className='col-md-4'>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input type='text' placeholder='Select plant/depot' className='input-text'/>
        <FontAwesomeIcon icon={faCaretDown} className='search-card'/>
      </div>
      <div className='col-md-4'>
        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        <input type='text' placeholder='Select Item' className='input-text'/>
        <FontAwesomeIcon icon={faCaretDown} className='search-card'/>
      </div>
    </div>
  );
}

export default search;