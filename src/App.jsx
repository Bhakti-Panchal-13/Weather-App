import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import './App.css'
// import Button from '@mui/material/Button';
// import SearchBox from './SearchBox';
// import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  let handleClick = ()=>{
    alert("welcome to material")
    // return (<p>welcome to material UI</p>)
  }
  return (
    <>
    {/* <h1>Material UI</h1>
     <Button variant="outlined" onClick={handleClick}>Submit</Button>
     <IconButton aria-label="delete" />
     <DeleteIcon onClick={handleClick}/> */}
    <WeatherApp/>
    </>
  )
}

export default App
