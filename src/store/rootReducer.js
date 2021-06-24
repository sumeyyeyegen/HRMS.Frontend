//tüm reducer'ları(stateleri) bir yerde toplamak için kullanılır.

import { combineReducers } from "redux";
import isAuthenticatedReducer from './reducers/isAuthenticatedReducer';

const rootReducer = combineReducers({
  isAuthenticated: isAuthenticatedReducer,
})

export default rootReducer;
