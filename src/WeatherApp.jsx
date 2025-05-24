import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 11.77,
        humidity: 94,
        temp: 12.05 ,
        tempMax: 12.05 ,
        tempMin: 12.05 ,
        weather: "Mist"
    });
     let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
     }
    return (
        <>
        <div style={{textAlign : "center"}}><h1>Weather App</h1></div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}