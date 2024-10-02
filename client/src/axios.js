import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
      'Content-Type': 'application/json'
    }
})

export const getData = async() =>{
    const response = await apiClient.get('/student');
    return response.data.msg
}