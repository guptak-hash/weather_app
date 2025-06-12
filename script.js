import { API_KEY } from "./config.js";


const city = 'London'
const fetchWeatherData=async(city)=>{
try{
    // console.log(`API_KEY >> ${API_KEY}`)
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data=await response.json();
    console.log(data)
}catch(err){
    console.log(err)
}
}

// const displayCityWeather=(data)=>{
//     document.getElementById('city-name').textContent=
// }

fetchWeatherData(city)

// name   main.temp  