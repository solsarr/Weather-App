
import { useState, useEffect } from "react";

 export default function Forecast7(){


 
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
<       div>
        <div className="day1">
        <p> Today: Low: {data.daily.temperature_2m_min[0]}F - High: {data.daily.temperature_2m_max[0]}F  - Inches of rain: {data.daily.precipitation_sum[0]}"</p>
    </div>

    <div className="day2">
        <p> Day 2: Low: {data.daily.temperature_2m_min[1]}F - High: {data.daily.temperature_2m_max[1]}F - Inches of rain: {data.daily.precipitation_sum[1]}"</p>
    </div>

    <div className="day3">
        <p> Day 3: Low: {data.daily.temperature_2m_min[2]}F - High: {data.daily.temperature_2m_max[2]}F - Inches of rain: {data.daily.precipitation_sum[2]}"</p>
    </div>
        
    <div className="day4">
         <p> Day 4: Low: {data.daily.temperature_2m_min[3]}F - High: {data.daily.temperature_2m_max[3]}F - Inches of rain: {data.daily.precipitation_sum[3]}"</p>
   </div>

   <div className="day5">
       <p> Day 5: Low: {data.daily.temperature_2m_min[4]}F - High: {data.daily.temperature_2m_max[4]}F - Inches of rain: {data.daily.precipitation_sum[4]}"</p>
   </div>       

   <div className="day6">
    <p> Day 6: Low: {data.daily.temperature_2m_min[5]}F - High: {data.daily.temperature_2m_max[5]}F - Inches of rain: {data.daily.precipitation_sum[5]}"</p>
   </div>

   <div className="day7">
       <p> Day 7: Low: {data.daily.temperature_2m_min[6]}F - High: {data.daily.temperature_2m_max[6]}F - Inches of rain: {data.daily.precipitation_sum[6]}"</p>
   </div>
   
       
       </div>
)
}

