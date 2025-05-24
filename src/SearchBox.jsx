import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [err , setErr] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "0b9a8167a14b9aa055d4a829d3b2c503"
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json()
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].main,
        };
        return result;
        }catch(err){
            throw err;
        }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
        
    };
    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch{
            setErr(true)
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" 
            label="Enter City" 
            variant="outlined" required 
            value={city}
            style={{backgroundColor : "#addbdb"}}
            onChange={handleChange}/><br></br><br></br>
      <Button type="submit" variant="contained" size="small">Search</Button>
            </form>
            {err && <p style={{color : "red"}}><b>No such place exist!</b></p>}
        </div>
    )
}