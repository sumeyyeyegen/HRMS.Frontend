//tüm reducer'ları(stateleri) bir yerde toplamak için kullanılır.

import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";


const rootReducer = combineReducers({
  candidates: candidateReducer,
  jobAdvertisements: jobAdvertisementReducer
})

export default rootReducer;
