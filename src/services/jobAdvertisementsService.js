import axios from 'axios'
import { getJobAdvertisements } from '../store/actions/jobAdvertisementActions'

const JOB_ADVERTİSEMENTS_REST_API_URL = "http://localhost:8080/api/jobadvertisements/"


export default class JobAdvertisementsService {

  async addJobAdvert(data) {
    return await axios.post(`${JOB_ADVERTİSEMENTS_REST_API_URL}add`, data)
  }

  async getAll(dispatch) {
    return await axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getall`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }

  async getActiveJobAdvertisements(dispatch) {
    return await axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrue`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data));
    })
  }

  getActiveJobAdvertisementsReleaseDateAsc(dispatch) {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByReleaseDateAsc`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }

  getActiveJobAdvertisementsReleaseDateDesc(dispatch) {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByReleaseDateDesc`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }

  getActiveJobAdvertisementsApplicationDeadlineAsc(dispatch) {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByApplicationDeadlineAsc`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }

  getActiveJobAdvertisementsApplicationDeadlineDesc(dispatch) {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueOrderByApplicationDeadlineDesc`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }

  getActiveJobAdvertisementsAndEmployerId(dispatch) {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrueAndEmployerId`).then(res =>{
      dispatch(getJobAdvertisements(res.data.data))
    })
  }
}
