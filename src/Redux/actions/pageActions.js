
import {
    SAVE_SELECED_PAGE,
    SAVE_PAGE_EDIT_DATA,
    SAVE_PAGE_ADD_DATA
} from '../constants'


 const pageSelectionCreator = (payload) => ({
    type:SAVE_SELECED_PAGE,
    payload
})
 const pageEditCreator = (payload) => ({
    type:SAVE_PAGE_EDIT_DATA,
    payload
})
 const pageAddCreator = (payload) => ({
    type:SAVE_PAGE_ADD_DATA,
    payload
})


const saveSelectedTopic = (selectedPath) => {
    return async (dispatch)=>{
        dispatch(pageSelectionCreator(selectedPath))
    }  
}
const savePageEditData = (payload) => {
    return async (dispatch)=>{
        dispatch(pageEditCreator(payload))
    }  
}
const savePageAddData = (payload) => {
    return async (dispatch)=>{
        dispatch(pageAddCreator(payload))
    }  
}

export {
    saveSelectedTopic,
    savePageEditData,
    savePageAddData
}