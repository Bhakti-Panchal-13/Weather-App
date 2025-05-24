import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"
export default function InfoBox({info}){
    let IMG_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="

    let COLD_URL = "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbGQlMjAlMjBjaXR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    let HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q="

    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1732747957048-2e3d4544e876?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJhaW4lMjAlMjBjaXR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className='InfoBox'><br></br>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia style={{backgroundColor : "#addbdb"}}
        sx={{ height: 140 }}
        image={(info.humidity >80)? RAIN_URL : (info.temp>25) ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent style={{backgroundColor : "#addbdb"}}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city .toUpperCase()}&nbsp;
          {(info.humidity >80)? <ThunderstormIcon/> : (info.temp>25) ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Weather <b>{info.weather}</b></p>
         {/* <p>The weather feels like {info.feelsLike}&deg;C</p> */}
         <p>Temperature {info.temp}&deg;C</p>
         <p>Humidity {info.humidity}</p>
         <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}
