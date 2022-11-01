import React, { useEffect } from 'react'
import '../JobAdvertisements/scss/JobAdvertisements.css'
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllJobAdvertisements } from '../../store/apiCall'
import JobAdvertisementsService from '../../services/jobAdvertisementsService'

function JobAdvertisements() {

  var jobAdvertsService = new JobAdvertisementsService();
  const jobAdvertisements = useSelector(state =>{console.log(state); return state.jobAdvertisements})

  const dispatch = useDispatch()

  useEffect(() => {
    jobAdvertsService.getAll(dispatch);
  }, [])


  return (
    <div className="row">
      {
        jobAdvertisements.length && jobAdvertisements.map((jobAdvertisement, index) => {
          return <JobAdvertisement key={index} jobAdvertisement={jobAdvertisement} />
        })
      }
    </div>
  )
}

export default JobAdvertisements
