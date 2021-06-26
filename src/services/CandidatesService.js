import axios from 'axios'

const CANDIDATES_REST_API_URL = "http://localhost:8080/api/candidates/"

export default class CandidatesService {
  getAllCandidates() {
    return axios.get(`${CANDIDATES_REST_API_URL}getall`);
  }

  registerCandidate() {
    return axios.get(`${CANDIDATES_REST_API_URL}register`);
  }
}