import axios from 'axios'

const api = axios.create({

  //baseURL: 'http://localhost:8081'
  baseURL: 'http://18.222.157.84:8080'

})

export default api