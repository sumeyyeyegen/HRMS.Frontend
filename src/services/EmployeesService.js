import axios from 'axios'

const EMPLOYEES_REST_API_URL = "http://localhost:8080/api/employees/"

export default class EmployeesService {
  getAllEmployees() {
    return axios.get(`${EMPLOYEES_REST_API_URL}getall`);
  }

  addEmployee(data) {
    return axios({
      method: "POST",
      url: `${EMPLOYEES_REST_API_URL}add`,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      }
    })
  }

  updateEmployee(data) {
    return axios({
      method: "PUT",
      url: `${EMPLOYEES_REST_API_URL}update`,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      }
    })
  }
}