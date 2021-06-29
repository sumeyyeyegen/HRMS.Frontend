import { ADD_CANDIDATE, DELETE_CANDIDATE } from '../actions/candidateActions'
import { candidates } from '../initialStates/candidate'

const initialState = {
  candidates: candidates,
}

function candidateReducer(state = initialState, { type, payload }) {

  switch (type) {
    case ADD_CANDIDATE:

      return {
        ...state,
        candidates: [...state.candidates, { candidates: payload }]
      }

    case DELETE_CANDIDATE:
      return {
        ...state,
        candidates: state.candidates.filter(candidate => candidate.id !== payload.id)
      }
    default:
      return { ...state }
  }
}

export default candidateReducer
