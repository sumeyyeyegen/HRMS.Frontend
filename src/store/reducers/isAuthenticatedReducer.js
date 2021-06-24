import { SIGN_IN, SIGN_OUT } from '../actions/isAuthenticatedActions'
import { isAuthenticated } from '../initialStates/isAuthenticated'

const initialState = {
  isAuthenticated
}

function isAuthenticatedReducer(state = initialState, { type }) {
  switch (type) {
    case SIGN_IN:
      return state = false;

    case SIGN_OUT:
      return state = true;

    default:
      return state;
  }
}

export default isAuthenticatedReducer
