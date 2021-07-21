import React from 'react'
import { Link } from 'react-router-dom'
import userImage3 from '../../assets/images/userImages3.jpg'
import './scss/Candidate.scss'

function Candidate({ candidate }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="candide-card">
        <img className="card-img-top" src={userImage3} alt="userImage" width="260" height="260" />
        <div className="candidate-card-footer">
          <h5 className="card-text mt-2 fw-bold">{candidate.firstName} {candidate.lastName}</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success"><i className="bi bi-download me-1"></i>Download</button>
            <Link to={`/cvs/${candidate.id}`} className="btn btn-primary"><i className="bi bi-search me-1" ></i>İncele</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate
