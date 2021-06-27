import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CandidatesService from '../../services/CandidatesService';
import Candidate from '../Candidate/Candidate'

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidates = new CandidatesService();
    candidates.getAllCandidates().then(result => { setCandidates(result.data.data) })
  }, [])

  return (
    <div className="row">
      {
        candidates.map((candidate, index) => {
          return <Candidate key={index} candidate={candidate} />
        })
      }
    </div>
  )
}

export default Candidates
