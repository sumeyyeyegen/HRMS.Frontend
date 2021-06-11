import React from 'react'
import './scss/JobAdvertisement.scss'

function JobAdvertisement() {
  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-body">
          <h5 className="card-text mt-2 fw-bold">Job Name</h5>
          <p>Job Description</p>
          <div>
            Create at + Application deadline
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobAdvertisement
