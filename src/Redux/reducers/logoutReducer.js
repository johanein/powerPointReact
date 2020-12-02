import {
    LOGIN_STATE
    } from '../constants'
    
    const initialState = {
        loginState:false
    }
    
    export default function logoutReducer(state = initialState, action) {
      switch (action.type) {
        case LOGIN_STATE:{
            const {loginState} = action
          return {
            ...state,
            loginState          
          }
          }
        default:
          return state
      }
    }