import axios from 'axios'

const api = axios.create({

  //baseURL: 'http://localhost:8081'
  baseURL: 'http://3.15.183.52:8080'

})

export default api