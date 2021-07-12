import { ADD_JOB_ADVERTISEMENT, DELETE_JOB_ADVERTISEMENT, GET_JOB_ADVERTİSEMENT } from '../actions/jobAdvertisementActions'
import { jobAdvertisements } from '../initialStates/jobAdvertisement';

const initialState = {
  jobAdvertisements: jobAdvertisements,
}

function jobAdvertisementReducer(state = initialState, { type, payload }) {

  switch (type) {
    case ADD_JOB_ADVERTISEMENT:

      return {
        ...state,
        jobAdvertisements: { ...state.jobAdvertisements, payload }
      }

    case GET_JOB_ADVERTİSEMENT:
      return payload;

    case DELETE_JOB_ADVERTISEMENT:
      return {
        ...state,
        jobAdvertisements: state.jobAdvertisements.filter(jobAdvertisement => jobAdvertisement.id !== payload.id)
      }
    default:
      return state.jobAdvertisements;
  }
}

export default jobAdvertisementReducer