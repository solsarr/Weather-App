import { useEffect, useState } from "react";
import Seven from "./Seven";
import Three from "./Three";
export default function Data(){
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


    return (
        <div className="data">
            <Seven wdata ={data} />
            <Three wdata ={data} />
        </div>
    )
}


