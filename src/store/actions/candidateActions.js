import CandidatesService from "../../services/CandidatesService";

export const ADD_CANDIDATE = "ADD_CANDIDATE"
export const DELETE_CANDIDATE = "DELETE_CANDIDATE"

export function addCandidate(candidate) {
  return {
    type: ADD_CANDIDATE,
    payload: candidate
  }
}

export function deleteCandidate(candidate) {
  return {
    type: DELETE_CANDIDATE,
    payload: candidate
  }
}
