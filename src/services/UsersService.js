import axios from 'axios'

const USERS_REST_API_URL = "http://localhost:8080/api/users/"


export default class UsersService {

  registerEmployer(data) {
    return axios({
      method: "POST",
      url: `${USERS_REST_API_URL}login`,
      data: {
        email: data.email,
        password: data.password
      }
    })
  }
}