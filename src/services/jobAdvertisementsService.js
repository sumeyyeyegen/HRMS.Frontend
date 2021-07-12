import axios from 'axios'

const JOB_ADVERTİSEMENTS_REST_API_URL = "http://localhost:8080/api/jobadvertisements/"

export default class JobAdvertisementsService {

  async addJobAdvert(data) {
    return await axios.post(`${JOB_ADVERTİSEMENTS_REST_API_URL}add`, data)
  }

  getActiveJobAdvertisements() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrue`);
  }

  getActiveJobAdvertisementsReleaseDateAsc() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByReleaseDateAsc`);
  }

  getActiveJobAdvertisementsReleaseDateDesc() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByReleaseDateDesc`);
  }

  getActiveJobAdvertisementsApplicationDeadlineAsc() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByApplicationDeadlineAsc`);
  }

  getActiveJobAdvertisementsApplicationDeadlineDesc() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByApplicationDeadlineDesc`);
  }

  getActiveJobAdvertisementsAndEmployerId() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueAndEmployerId`);
  }
}
