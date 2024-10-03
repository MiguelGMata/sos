import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://sos-six-phi.vercel.app' : 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getData = async() =>{
    const response = await apiClient.get('/');
    console.log(response,'<')
    return response.data
}


export const getDataTest = async() =>{
  const response = await apiClient.get('/api/test');
  console.log(response,'<--')
  return response.data
}