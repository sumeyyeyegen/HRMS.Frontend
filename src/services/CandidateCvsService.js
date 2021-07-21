import axios from 'axios'

const CANDIDATE_CVS_REST_API_URL = "http://localhost:8080/api/candidate/cvs/"

export default class CandidatesService {
  async getByCandidateCvId(id) {
    return await axios.get(`${CANDIDATE_CVS_REST_API_URL}getbycandidatecvid/${id}`);
  }

  async getAllByCandidateId(id) {
    return await axios.get(`${CANDIDATE_CVS_REST_API_URL}getallbycandidateid/${id}`);
  }

  getAll() {
    return axios.get(`${CANDIDATE_CVS_REST_API_URL}getall`);
  }
}