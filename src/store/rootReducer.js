//tüm reducer'ları(stateleri) bir yerde toplamak için kullanılır.

import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";


const rootReducer = combineReducers({
  candidates: candidateReducer
})

export default rootReducer;
