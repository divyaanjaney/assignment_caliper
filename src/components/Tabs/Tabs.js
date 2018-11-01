import React from 'react';
import './Tab.css';

const Tabs = () => {
  return (
    <div className='button-tabs row'>
      <div className='col-md-8'>
        <button type="button" class="btn all-btn">All(60)</button>
        <button type="button" class="btn middle-btn">FTL(26)</button>
        <button type="button" class="btn middle-btn">LCL(16)</button>
        <button type="button" class="btn middle-btn">Courier (10)</button>
        <button type="button" class="btn end-btn">Container (30)</button>
      </div>
      <div className='col-md-4'>
        <button type="button" class="btn secondStartBtn">Inbound(30)</button>
        <button type="button" class="btn secondEndBtn">Outbound(16)</button>
      </div>
    </div>
  );
}

export default Tabs;