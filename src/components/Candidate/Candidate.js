import React from 'react'
import userImage2 from '../../assets/images/userImages2.jpg'
import './scss/Candidate.scss'

function Candidate({ candidate }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mt-5">
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={userImage2} alt="userImage" />
          <h5 className="card-text mt-2 fw-bold">{candidate.firstName} {candidate.lastName}</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success"></button>
            <button className="btn btn-primary">Cv İncele</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate
