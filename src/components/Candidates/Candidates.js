import React, { useEffect, useState } from 'react'
import CandidatesService from '../../services/CandidatesService';
import Candidate from '../Candidate/Candidate'
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate } from '../../store/actions/candidateActions';
import { toast } from 'react-toastify'

function Candidates() {
  const dispatch = useDispatch();
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
          return <Candidate key={index} candidate={candidate} />
        })
      }
    </div>
  )
}

export default Candidates
