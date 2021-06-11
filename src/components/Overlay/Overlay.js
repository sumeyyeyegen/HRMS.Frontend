import React from 'react'
import overlayImage from '../../assets/images/Home_ Header.svg';
import './scss/Overlay.scss'

function Overlay() {
  return (
    <div className="row">
      <div className="col-sm">
        <img src={overlayImage} alt="" className="img-overlay" />
      </div>
      <div className="col-sm mt-5 mt-sm-0">
        <h1 className='fw-bold text-primary'>
          Services Offered
        </h1>
        <ul>
          <li>Job search by city</li>
          <li>Job search by job title</li>
          <li>All job advertisement list</li>
          <li>Easy access to CV of candidates</li>
        </ul>
      </div>
    </div>
  )
}

export default Overlay
