import './App.css';
import { useState } from 'react';
import Card from './Card'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const API_BASE_URL = 'http://api.openweathermap.org/';
function App() {
  const [input, setInput] = useState("")
  const [weatherResult, setweatherResult] = useState(null)
  const [status, setStatus] = useState(null)
  const handeSubmit =(e) =>{
    e.preventDefault()
    setweatherResult(null)
    if (input){
      // setStatus(null)
      onSearch()
      setInput("")
      
    }

  }
  const onSearch=async()=>{
    try {
      const result = await axios.get(`${ API_BASE_URL}/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`)
      setweatherResult(result.data)
      console.log(result.data.cod)
      
    }
    catch(error){
   
      console.log(error.request.status)
      setStatus(error.request.status)

      }
    
  }
  
  const renderResults =() =>{
    if (weatherResult || status === 200) {
      return(<div className="result-container"><Card api_data={weatherResult} list_data={weatherResult.list[0]}/><Card api_data={weatherResult} list_data={weatherResult.list[12]} />
      <Card api_data={weatherResult}list_data={weatherResult.list[20]}/></div>)
    }
    else if(weatherResult || status === 404){
      console.log(weatherResult)
      return(<div className="result-container"><h2>Results not found ☹️ try again</h2></div>)
      
    }
   
  }

  return (
    <div >
      <div className="nav-bar"><h1>Weather app</h1></div>
      <div className="hero">
        <div className="search-section">
          <h2>Search your city name</h2>
          <div className="input"><form onSubmit={handeSubmit}><input value={input} spellCheck="fasle" placeholder="City name" onChange={(e)=> setInput(e.target.value)}></input>
          <div className="button"><button type="submit">Search</button></div></form></div> 
        </div>
        
        {renderResults()}
        
        <p className="footer">Made by Analog_guy 🐧</p>
      </div>
    </div>
  );
}

export default App;
