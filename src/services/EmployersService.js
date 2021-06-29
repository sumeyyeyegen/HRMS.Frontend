import axios from 'axios'

const EMPLOYERS_REST_API_URL = "http://localhost:8080/api/employers/"

export default class EmployersService {
  getAllEmployers() {
    return axios.get(`${EMPLOYERS_REST_API_URL}getall`);
  }

  registerEmployer(data) {
    return axios({
      method: "POST",
      url: `${EMPLOYERS_REST_API_URL}register`,
      data: {
        firstName: data.companyName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        webSite: data.webSite,
        password: data.password
      }
    })
  }
}