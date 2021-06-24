import axios from 'axios'

const JOB_ADVERTİSEMENTS_REST_API_URL = "http://localhost:8080/api/jobadvertisements/"

export default class JobAdvertisementsService {
  getActiveJobAdvertisements() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrue`);
  }
}
