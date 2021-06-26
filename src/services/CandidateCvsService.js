import axios from 'axios'

const CANDIDATE_CVS_REST_API_URL = "http://localhost:8080/api/candidate/cvs/"

export default class CandidatesService {
  getByCandidateCvId() {
    return axios.get(`${CANDIDATES_REST_API_URL}getbycandidatecvid`);
  }

  getAllByCandidateId() {
    return axios.get(`${CANDIDATES_REST_API_URL}getallbycandidateid`);
  }

  getAll() {
    return axios.get(`${CANDIDATES_REST_API_URL}getall`);
  }
}