
import {
    SAVE_JSON_PLACEHOLDER
} from '../constants'

import network from './network'

 const jsonPlaceholderActionCreator = (payload) => ({
    type:SAVE_JSON_PLACEHOLDER,
    payload
})

const netWorkFunction = async ({url}) => {
    const response = await network.get(url)
return response
}

 const jsonPlaceholderGetReq = ({pageNo}) =>{
    return async (dispatch)=>{
        const payload =  await netWorkFunction({url:`API/CONTENTLISTINGPAGE-PAGE${pageNo}.json`})
        const {data} = payload
        dispatch(jsonPlaceholderActionCreator(data))
    }  
}

export {
    jsonPlaceholderGetReq,
    jsonPlaceholderActionCreator
}