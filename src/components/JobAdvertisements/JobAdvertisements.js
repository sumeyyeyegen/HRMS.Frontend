import React from 'react'
import '../JobAdvertisements/scss/JobAdvertisements.scss'
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement'

function JobAdvertisements() {
  return (
    <div className="row mt-5">
      <JobAdvertisement />
      <JobAdvertisement />
      <JobAdvertisement />
    </div>
  )
}

export default JobAdvertisements
