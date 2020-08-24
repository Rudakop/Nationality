import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import lookup from 'country-code-lookup';



const App = () => {
const [result, setResult] =useState('')
const [name, setName] = useState('')
const [error, setError] = useState('')

  useEffect(()=>{
    fetchingData()
  },[name])

    const fetchingData = async () => {
    if(name) {
    const data =  await axios.get(`https://api.nationalize.io?name=${name}`)
    console.log('data is', data)
    setResult(data.data.country)
    }else{
    console.log('No name to fetch')
    }
    }

  const handleClick = () => {
    setError('')
    console.log('button Clicked')
    console.log ('Country names', result)
    const value = document.getElementById('input-box').value
    if(value) {
      setName(document.getElementById('input-box').value)
    }else{
      setError('Please enter the name')
    }
    document.getElementById('input-box').value =''
   }

  return (
    <div className="container">
      <h1>Predict the nationality by entering the name..</h1>
      <input type="text" placeholder="Please enter name.." id="input-box"/>
      <Display result={result} error={error}/>
      <button onClick={handleClick}>Check</button>
    </div>
  );
}

const Display = ({error,result}) => {
return (
  <div>
      {result &&(result.length>0 ? 
      result.map ((r,i) => <ConvertToCountry key={i} r={r}/>)
      :
      <p>No name found</p>
      )}
    {error && error}
    </div>
    )
}

 const ConvertToCountry = ({r}) => {
   const res = lookup.byIso (r.country_id)
   console.log ('res is country name ', res.country)
   const prob = r.probability.toFixed(2);
   console.log ('new prob', prob)
    return(
      <div>
          <p>{res.country}{prob}</p>
      </div>
      )
    }

export default App;
