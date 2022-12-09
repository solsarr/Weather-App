import { useState, useEffect } from "react";



export default function Three(props){

const [data, setData] = useState(null);
    async function handleData(){
        try {
            const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
            const weatherData = await foundData.json()
            setData(weatherData)
            console.log(weatherData)
        } catch(err){
            console.log(err)
        }
    }
    
   useEffect(() => {
        handleData();
    }, []);
    if (data == null){
        return <h1>Loading...</h1>
    }
return(
    <div>
        <div className="day1">
        <p> Today: Low: {data.daily.temperature_2m_min[0]}F - High: {data.daily.temperature_2m_max[0]}F  - Inches of rain: {data.daily.precipitation_sum[0]}"</p>
    </div>

    <div className="day2">
        <p>The {data.daily.time[1].slice(8)}th Low: {data.daily.temperature_2m_min[1]}F - High: {data.daily.temperature_2m_max[1]}F - Inches of rain: {data.daily.precipitation_sum[1]}"</p>
    </div>

    <div className="day3">
        <p>The {data.daily.time[2].slice(8)}th Low: {data.daily.temperature_2m_min[2]}F - High: {data.daily.temperature_2m_max[2]}F - Inches of rain: {data.daily.precipitation_sum[2]}"</p>
    </div>
    </div>
)





























}
