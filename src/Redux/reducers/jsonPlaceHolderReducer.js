import {
  SAVE_JSON_PLACEHOLDER,
  CLEAR_JSON_PLACEHOLDER
  } from '../constants'
  
  const initialState = {
    jsonAxiosGetResult:[],
    pageNoReceived:0,
    nextPageTocall:1,
    contents:[],
    initContents:[]
  }
  
  export default function jsonPlaceHolderReducer(state = initialState,action) {
    const {type,payload} = action || {}
    switch (type) {
        case SAVE_JSON_PLACEHOLDER:{
          const {initContents} = state
          let {page:{'page-num-requested':pageNoReceived, 'content-items':{content=[]}={}}={}}= payload
           const contents = [...initContents,...content]
          pageNoReceived = parseInt(pageNoReceived)
          const nextPageTocall = pageNoReceived + 1

        return {
          ...state,
          jsonAxiosGetResult: payload,
          pageNoReceived,
          nextPageTocall,
          contents,
          initContents: contents
        }
      }
      case 'SEARCH_CONTENTS' :{
        let {contents} = state
        const {initContents} = state
        contents = initContents
        if(payload)contents = contents.filter(({name})=>name.includes(payload))
        
return {
  ...state,
  contents
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
  