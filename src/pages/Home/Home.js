import React from 'react'
import Candidates from '../../components/Candidates/Candidates'
import JobAdvertisements from '../../components/JobAdvertisements/JobAdvertisements'
import Overlay from '../../components/Overlay/Overlay'

function Home() {
  return (
    <div className="container">
      <Overlay />
      <Candidates />
      <JobAdvertisements />
    </div>
  )
}

export default Home
