import axios from 'axios'

const EMPLOYERS_REST_API_URL = "http://localhost:8080/api/employers/"

export default class CandidatesService {
  getAllEmployers() {
    return axios.get(`${EMPLOYERS_REST_API_URL}getall`);
  }

  registerCandidate() {
    return axios.get(`${EMPLOYERS_REST_API_URL}register`);
  }
}