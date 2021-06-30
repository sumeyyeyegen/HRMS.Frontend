// import JobAdvertisementsService from "../../services/JobAdvertisementsService";

export const ADD_JOB_ADVERTISEMENT = "ADD_JOB_ADVERTISEMENT"
export const DELETE_JOB_ADVERTISEMENT = "DELETE_JOB_ADVERTISEMENT"

export function addJobAdvertisement(jobAdvert) {
  return {
    type: ADD_JOB_ADVERTISEMENT,
    payload: jobAdvert
  }
}

export function deletejobAdvertisement(jobAdvert) {
  return {
    type: DELETE_JOB_ADVERTISEMENT,
    payload: jobAdvert
  }
}
