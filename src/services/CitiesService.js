import axios from 'axios'

const CITIES_REST_API_URL = "http://localhost:8080/api/cities/"

export default class CitiesService {

  getAllCities() {
    return axios.get(`${CITIES_REST_API_URL}getall`);
  }

  getById() {
    return axios.get(`${CITIES_REST_API_URL}getbyid`);
  }
}