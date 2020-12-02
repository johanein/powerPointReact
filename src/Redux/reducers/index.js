import { combineReducers } from 'redux'
import toastReducer from './toastReducer.js'
import jsonPlaceHolderReducer from './jsonPlaceHolderReducer'
import logoutReducer from './logoutReducer'


const rootReducer = combineReducers({
    toastReducer,
    jsonPlaceHolderReducer,
    logoutReducer
  })
  
  export default rootReducer