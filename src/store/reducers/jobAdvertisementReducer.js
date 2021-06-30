import { ADD_JOB_ADVERTISEMENT, DELETE_JOB_ADVERTISEMENT } from '../actions/jobAdvertisementActions'
import { jobAdvertisement } from '../initialStates/jobAdvertisement'

const initialState = {
  jobAdvertisement: jobAdvertisement,
}

function jobAdvertisementReducer(state = initialState, { type, payload }) {

  switch (type) {
    case ADD_JOB_ADVERTISEMENT:

      return {
        ...state,
        jobAdvertisements: [...state.jobAdvertisement, { jobAdvertisement: payload }]
      }

    case DELETE_JOB_ADVERTISEMENT:
      return {
        ...state,
        jobAdvertisements: state.jobAdvertisements.filter(jobAdvertisement => jobAdvertisement.id !== payload.id)
      }
    default:
      return { ...state }
  }
}

export default jobAdvertisementReducer