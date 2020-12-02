import {
  OPEN_TOAST
  } from '../constants'
  
  const initialState = {
    toastOpen:false
  }
  
  export default function toastReducer(state = initialState, action) {
    switch (action.type) {
      case OPEN_TOAST:
        return {
          ...state,
          toastOpen: true          
        }
      default:
        return state
    }
  }