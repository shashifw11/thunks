import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from 'redux-thunk'
import { PostReducer } from "./app/reducer";
import { LoginReducer } from "./auth/reducer";
const rootReduser=combineReducers({
  login:LoginReducer,
  Postdata:PostReducer

})


export const store=createStore(rootReduser,applyMiddleware(thunk))