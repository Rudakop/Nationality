import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [result, setResult] =useState('')

  useEffect(()=>{
    fetchingData()
  },[])

  const fetchingData = async () => {
    const data =  await axios.get ('https://api.nationalize.io?name=michael')
    console.log('data is', data)
    setResult(data.data.country)
  }

  const handleClick = () => {
    console.log('button Clicked')
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Check</button>
    </div>
  );
}

export default App;
