import axios from 'axios'

const JOBS_REST_API_URL = "http://localhost:8080/api/jobs/"

export default class JobService {
  getAllJobs() {
    return axios.get(`${JOBS_REST_API_URL}getall`);
  }

  addJob(data) {
    return axios({
      method: "POST",
      url: `${EMPLOYEES_REST_API_URL}add`,
      data: {
        title: data.title
      }
    })
  }
}