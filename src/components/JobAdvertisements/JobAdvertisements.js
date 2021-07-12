import React, { useEffect } from 'react'
import '../JobAdvertisements/scss/JobAdvertisements.scss'
import JobAdvertisement from '../JobAdvertisement/JobAdvertisement'
import { useDispatch, useSelector } from 'react-redux'
import { getJobAdvertisementApi } from '../../store/actions/jobAdvertisementActions'

function JobAdvertisements() {
  const jobAdvertisements = useSelector(state => state.jobAdvertisements)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobAdvertisementApi())
  }, [dispatch])

  console.log(jobAdvertisements);
  return (
    <div className="row mt-5">
      {
        jobAdvertisements && jobAdvertisements.map((jobAdvertisement, index) => {
          return <JobAdvertisement key={index} jobAdvertisement={jobAdvertisement} />
        })
      }
    </div>
  )
}

export default JobAdvertisements
