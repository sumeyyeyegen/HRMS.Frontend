export const GET_JOB_ADVERTISEMENT = "GET_JOB_ADVERTISEMENTS"
export const ADD_JOB_ADVERTISEMENT = "ADD_JOB_ADVERTISEMENT"
export const DELETE_JOB_ADVERTISEMENT = "DELETE_JOB_ADVERTISEMENT"

export function getJobAdvertisements(jobAdvert) {
  return {
    type: GET_JOB_ADVERTISEMENT,
    payload: jobAdvert
  }
}

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


