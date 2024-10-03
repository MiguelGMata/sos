import { useState, useEffect } from 'react'
import { getData } from './axios'
import './App.css'

function App() {
  const [count, setCount] = useState()
  useEffect(()=>{
    const fetchHome = async() =>{
      const response = await getData();
      setCount(response)
    };
    fetchHome();
  },[])

  return (
    <>
      <div>
        <h1>{count}</h1>
        <h2>test</h2>
      </div>
    </>
  )
}

export default App
