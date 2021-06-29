import axios from 'axios'

const CANDIDATES_REST_API_URL = "http://localhost:8080/api/candidates/"

export default class CandidatesService {
  getAllCandidates() {
    return axios.get(`${CANDIDATES_REST_API_URL}getall`);
  }

  registerCandidate(data) {
    return axios({
      method: "POST",
      url: `${CANDIDATES_REST_API_URL}register`,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        identityNumber: data.identityNumber,
        email: data.email,
        birthYear: data.birthYear,
        password: data.password
      }
    })
  }
}