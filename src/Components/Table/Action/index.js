import network from '../../../Redux/actions/network'
import {saveDataJson} from './actionCreator'

const netWorkFunction = async ({url}) => {
    const response = await network.get(url)
return response
}

const getDataJson = async ({dispatch}) =>{
        const payload =  await netWorkFunction({url:`API/MOCK_DATA.json`})
        const {data} = payload
        dispatch(saveDataJson(data))
}

export {
    getDataJson
}