import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='row card-row conatiner' >
        <div className='col-md-2 col-card'>
            <div>
            <div>TOTAL TRIPS</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>54</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>100cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
            </div>
        </div>
         <div className='col-md-2 col-card-child col-card-child1'>
          <div>ON-TIME</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>26</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>47cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
        </div>
        <div className='col-md-2 col-card-child col-card-child2'>
          <div>DELAYED</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>12</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>27.2cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
        </div>
        <div className='col-md-2 col-card-child col-card-child3'>
          <div>DEVIATED</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>03</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>9.3cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
        </div>
        <div className='col-md-2 col-card-child col-card-child4'>
          <div>MISSING</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>07</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>9.3cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
        </div>
        <div className='col-md-2 col-card-child col-card-child5'>
         <div>UN-TRACKED</div>
            <div className='row border-row'>
              <div className='col-md-6 digit-align'>
                <span>03</span>
              </div>
              <div className='col-md-6 num-align'>
                <span>3.2cr</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                +8%
              </div>
              <div className='col-md-6'>
                -9.9%
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Card;