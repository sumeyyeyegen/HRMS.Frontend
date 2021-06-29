import axios from 'axios'

const JOB_ADVERTİSEMENTS_REST_API_URL = "http://localhost:8080/api/jobadvertisements/"

export default class JobAdvertisementsService {

  addJobAdvert(data) {
    return axios({
      method: "POST",
      url: `${JOB_ADVERTİSEMENTS_REST_API_URL}add`,
      data: {
        jobId: data.jobId,
        cityId: data.cityId,
        employerId: data.employerId,
        jobDescription: data.jobDescription,
        active: data.active,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
        openPositions: data.openPositions,
        releaseDate: data.releaseDate,
        applicationDeadline: data.applicationDeadline
      }
    })
  }
  getActiveJobAdvertisements() {
    return axios.get(`${JOB_ADVERTİSEMENTS_REST_API_URL}getByIsActiveTrue`);
  }
}
