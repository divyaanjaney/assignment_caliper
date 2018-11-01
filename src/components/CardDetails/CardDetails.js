import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTruckMoving, faComment, faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import './CardDetails.css';

const CardDetails = () => {
  return (
    <div>
      <div className='row card-row'>
        <div className='col-md-6 border-effect'>
          <div class='row text-border'>
            <div className='col-md-6 text-alignment'>
              <FontAwesomeIcon icon={faExclamationTriangle}/>
              Missing truck
            </div>
            <div className='col-md-6 text-alignment'>
              <div className='left-text-alignment'>Value:<span>5cr</span></div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 border-div'>
              <div><b>Trip Id : </b><span>123456</span></div>
              <div><b>Transporter : </b><span>VRL Logistics</span></div>
            </div>
            <div className='col-md-6'>
              <div><b>From : </b><span>Mumbai</span></div>
              <div><b>To: </b><span>Bangalore</span></div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 missing-truck border-div'>
              <div><b>Driver details</b></div>
              <div>Rahul(+91-987653210)</div>
            </div>
            <div className='col-md-6 missing-truck'>
              <div><b>Last Known details </b></div>
              <div>Kolhapur
                (26-Oct-2017,11:12PM)</div>
            </div>
          </div>
        </div>
        <div className='col-md-6 border-effect'>
         <div class='row text-border-detection'>
            <div className='col-md-6 text-alignment-detection'>
              <FontAwesomeIcon icon={faExclamationTriangle}/>
              Detection truck
            </div>
            <div className='col-md-6 text-alignment-detection'>
              <div className='detection-text-alignment'>Value:<span>5cr</span></div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 border-div'>
              <div><b>Trip Id : </b><span>123456</span></div>
              <div><b>Transporter : </b><span>VRL Logistics</span></div>
            </div>
            <div className='col-md-6'>
              <div><b>From : </b><span>Mumbai</span></div>
              <div><b>To: </b><span>Bangalore</span></div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 missing-truck border-div'>
              <div><b>Driver details </b></div>
              <div>Rahul(+91-987653210)</div>
            </div>
            <div className='col-md-6 missing-truck'>
              <div><b>Check Point details</b></div>
              <div>Kolhapur
                (26-Oct-2017,11:12PM)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='row card-row'>
        <div className='col-md-6 border-effect'>
          <div class='row text-border-ship'>
            <div className='col-md-6 text-alignment-ship'>
              <FontAwesomeIcon icon={faRupeeSign}/>
              High value shipment
              <button className='onTime-btn'>On time</button>
            </div>
            <div className='col-md-6 text-alignment-ship'>
              <div className='ship-text-alignment'>Value:<span>5cr</span></div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 border-div'>
              <div><b>Trip Id : </b><span>123456</span></div>
              <div><b>Transporter : </b><span>VRL Logistics</span></div>
            </div>
            <div className='col-md-6'>
              <div><b>Mumbai,Maharastra </b></div>
              <div>22 Oct, 9:45AM</div>
            </div>
          </div>
          <div class='row'>
            <div className='col-md-6 missing-truck border-div'>
              <div><b>Driver Details : </b></div>
              <div>Rahul(+91-987653210)</div>
            </div>
            <div className='col-md-6 missing-truck'>
              <div><b>Place, State </b></div>
              <div>25 Oct, 2:04PM</div>
            </div>
          </div>
           <div class='row'>
            <div className='col-md-6 missing-truck border-div'>
              <div><b>Item </b></div>
              <div>TMT steel bars</div>
            </div>
            <div className='col-md-6 missing-truck'>
              <div><b>Place, State </b></div>
              <div>ETA, 26 Oct, 2:30PM</div>
            </div>
          </div>
           <div class='row'>
            <div className='col-md-6 border-div'>
              <button className='view-button purple'>View more</button>
            </div>
            <div className='col-md-6 missing-truck'>
              <div><b>Place, State </b></div>
              <div>ETA, 26 Oct, 2:30PM</div>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-effect-last'>
          <div className='text-border-tracking lightgreen'>
            <FontAwesomeIcon icon={faComment}/>
              Do you know?
          </div>
          <div className='row'>
            <div className='col-md-8'>
              There are 03 un-tracked shipment. Start tracking for not losing on them.
            </div>
            <div className='col-md-4'>
              <button className='tracking-btn'> Start tracking </button>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-effect-last border-effect-last-margin'>
         <div className='text-border-tracking lightbluegreen'>
            <FontAwesomeIcon icon={faTruckMoving}/>
              Transporter Details
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div><b>Total</b></div>
              <div>10</div>
            </div>
            <div className='col-md-4'>
              <div><b>Top transporter</b></div>
              <div>VRL Logistics</div>
            </div>
            <div className='col-md-4'>
              <button className='view-btn'>View all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;