import {
  SAVE_JSON_PLACEHOLDER,
  CLEAR_JSON_PLACEHOLDER
  } from '../constants'
  
  const initialState = {
    jsonAxiosGetResult:[]
  }
  
  export default function jsonPlaceHolderReducer(state = initialState,action) {
    const {type,payload} = action || {}
    switch (type) {
        case SAVE_JSON_PLACEHOLDER:{
        return {
          ...state,
          jsonAxiosGetResult: payload
        }
      }
        case CLEAR_JSON_PLACEHOLDER:{
        return {
          ...state,
          jsonAxiosGetResult: []
        }
      }

      default:
        return state
    }
  }
  