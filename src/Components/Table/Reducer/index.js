
import { createContext } from 'react'
const {Provider} = createContext()

const initialState = {
    dataJson:[]
}

const reducer =  (state, { type, payload }) => {
    switch (type) {

    case 'SAVE_DATA_JSON':{
        return { ...state, dataJson: payload}
}
    default:
        return state
    }
}

export {
    initialState,
    Provider,
    reducer
}


