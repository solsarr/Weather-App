import { useState, useEffect } from "react";

export default function Today(){

    const [data, setData] = useState(null);
    async function handleData(){
        try {
            const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
            const weatherData = await foundData.json()
            setData(weatherData)
            
        } catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        handleData();
    }, []);
    
    if (data == null){
        return (
            <h1>Loading...</h1>
            )
        }
        console.log(data)



    return (
        <div>
        <div className="today">
        <h1 className='todayLow'></h1>
        <h1>Date Today: {data.daily.time[1].slice(5)}</h1>
        <h1> Low: {data.daily.temperature_2m_min[0]}F </h1>
        <h1 className='todayHigh'> High: {data.daily.temperature_2m_max[0]}F</h1>
        <h1 className='todayRain'>  Inches of rain: {data.daily.precipitation_sum[0]}"</h1>
        <h1>Wind Speed MPH: {data.daily.windspeed_10m_max[0]}</h1>
    </div>
    </div>
    )
}