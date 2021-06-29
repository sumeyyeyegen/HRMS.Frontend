import axios from 'axios'

const WORK_PLACES_REST_API_URL = "http://localhost:8080/api/workplaces/"

export default class WorkPlacesService {
  getAllPlaces() {
    return axios.get(`${WORK_PLACES_REST_API_URL}getall`);
  }

  addWorkPlace(data) {
    return axios({
      method: "POST",
      url: `${WORK_PLACES_REST_API_URL}add`,
      data: {
        name: data.name
      }
    })
  }
}