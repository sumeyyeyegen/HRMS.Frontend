import axios from 'axios'

const WORK_TIMES_REST_API_URL = "http://localhost:8080/api/worktimes/"

export default class WorkTimesService {
  getAllWorkTimes() {
    return axios.get(`${WORK_TIMES_REST_API_URL}getall`);
  }

  addWorkTime(data) {
    return axios({
      method: "POST",
      url: `${WORK_TIMES_REST_API_URL}add`,
      data: {
        name: data.name
      }
    })
  }
}