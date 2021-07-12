import JobAdvertisementsService from "../../services/JobAdvertisementsService"
export const GET_JOB_ADVERTİSEMENT = "GET_JOB_ADVERTİSEMENTS"
export const ADD_JOB_ADVERTISEMENT = "ADD_JOB_ADVERTISEMENT"
export const DELETE_JOB_ADVERTISEMENT = "DELETE_JOB_ADVERTISEMENT"

const jobAdvertisementService = new JobAdvertisementsService();

export function getJobAdvertisements(jobAdvert) {
  return {
    type: GET_JOB_ADVERTİSEMENT,
    payload: jobAdvert
  }
}

export function addJobAdvertisement(jobAdvert) {
  return {
    type: ADD_JOB_ADVERTISEMENT,
    payload: jobAdvert
  }
}

// pardon ya şimdi anladım bekle şurda kullancaz
export function deletejobAdvertisement(jobAdvert) {
  return {
    type: DELETE_JOB_ADVERTISEMENT,
    payload: jobAdvert
  }
}

export function getJobAdvertisementApi() {
  return async (dispath) => {
    await jobAdvertisementService.getActiveJobAdvertisements().then(res => dispath(getJobAdvertisements(res.data.data)))
  }
}
