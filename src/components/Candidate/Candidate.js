import React from 'react'
import userImage2 from '../../assets/images/userImages2.jpg'
import './scss/Candidate.scss'

function Candidate() {
  return (
    <div className="col-sm mt-5">
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={userImage2} alt="userImage" />
          <h5 className="card-text mt-2 fw-bold">First name Last Name</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success">Cv File download</button>
            <button className="btn btn-primary">Cv İncele</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate
