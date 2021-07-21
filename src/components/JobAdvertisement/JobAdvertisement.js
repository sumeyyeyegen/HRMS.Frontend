import React from 'react'
import './scss/JobAdvertisement.scss'
import { Link } from 'react-router-dom'

function JobAdvertisement({ jobAdvertisement }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4" >
      <div className="h-100 job-item p-4">
        <Link to="/jobAdvertDetail">
          <h4>{jobAdvertisement.job.title}</h4>
        </Link>

        <small className="text-muted">
          <b>{jobAdvertisement.employer.companyName}</b> - {jobAdvertisement.employer.webSite}
        </small>
        <p>{jobAdvertisement.jobDescription}</p>
        <small>
          <div><i className="bi bi-geo-alt-fill"></i> {jobAdvertisement.city.name}  {jobAdvertisement.applicationDeadline}</div>
        </small>
      </div>
    </div>
  )
}

export default JobAdvertisement
