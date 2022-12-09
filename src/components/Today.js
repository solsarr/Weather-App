import { useState, useEffect } from "react";

export default function Today(){

    const [data, setData] = useState(null);
    async function handleData(){
        try {
            const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
            const weatherData = await foundData.json()
            setData(weatherData)
            console.log(data)

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



    return (
        <div>
        <div className="today">
        <h1 className='todayLow'> Today: Low: {data.daily.temperature_2m_min[0]}F </h1><h1 className='todayHigh'> High: {data.daily.temperature_2m_max[0]}F</h1><h1 className='todayRain'> - Inches of rain: {data.daily.precipitation_sum[0]}"</h1>
    </div>
    </div>
    )
}