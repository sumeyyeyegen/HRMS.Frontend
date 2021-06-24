import React, { useEffect, useState } from 'react'
import '../JobAdvertisements/scss/JobAdvertisements.scss'
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement'
import JobAdvertisementsService from '../../services/jobAdvertisementsService'

function JobAdvertisements() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementsService = new JobAdvertisementsService()
    jobAdvertisementsService.getActiveJobAdvertisements().then(result => { setJobAdvertisements(result.data.data) })
  }, [])
  return (
    <div className="row mt-5">
      {console.log(jobAdvertisements)}
      {
        jobAdvertisements && jobAdvertisements.map((jobAdvertisement, index) => {
          return <JobAdvertisement key={index} jobAdvertisement={jobAdvertisement} />
        })
      }
    </div>
  )
}

export default JobAdvertisements
