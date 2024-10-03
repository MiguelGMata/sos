import { useState, useEffect } from 'react'
import { getData, getDataTest } from './axios'
import './App.css'

function App() {
  const [count, setCount] = useState()
  const [dataTest, setDataTest ] = useState() 
  useEffect(()=>{
    const fetchHome = async() =>{
      const response = await getData();
      setCount(response)
      const data = await getDataTest();
      setDataTest(data.msg)
      
    };
    fetchHome();
  },[])

  return (
    <>
      <div>
        <h1>{count}</h1>
        <h1>{dataTest}</h1>
      </div>
    </>
  )
}

export default App
