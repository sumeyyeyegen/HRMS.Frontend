import React, { useEffect, useState } from 'react'
import CandidatesService from '../../services/CandidatesService';
import Candidate from '../Candidate/Candidate'
import { toast } from 'react-toastify'

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidatesService = new CandidatesService();
    candidatesService.getAllCandidates().then(result => { setCandidates(result.data.data) });
    toast.success(`Ekleme işlemi başarılı`);
  }, [])

  return (
    <div className="row">
      {
        candidates.map((candidate, index) => {
          return <Candidate key={index} id={candidate.id} candidate={candidate} />
        })
      }
    </div>
  )
}

export default Candidates
