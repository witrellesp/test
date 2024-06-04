import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/witrellesp/test',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getPlats() {
    return apiClient.get('/menu')
  }
}
