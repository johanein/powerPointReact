import axios from 'axios'


const network = {
    get: (url) => axios.get(`${url}`),
    post: (url, data) => axios.post(`${url}`, data),
    patch: (url, data) =>
      axios.patch(`${url}`, data)
  }

  export default network