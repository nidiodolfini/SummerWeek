import axios from 'axios'

const api = axios.create({

  baseURL: 'http://localhost:8081'
  //baseURL: 'http://ctdsummerweek.nerdasaservice.com.br'

})

export default api