import {useState, useEffect} from "react";
import Forecast3 from "./Three";
import Forecast7 from "./Seven"
import Today from "./Today";
import DateTime from "./DateTime";

    export default function Data(){
        
    const [threeDay, setThreeDay] = useState(false);

    const handleClick = () =>{
      setThreeDay(current => !current);
        
    };
    const [sevenDay, setSevenDay] = useState(false);

    const handleDay = () =>{
      setSevenDay(current => !current);
        
    };
    const [currentDay, setCurrentDay] = useState(true);

    const handleToday = () =>{
        setCurrentDay(current => !current);
    };
const [data, setData] = useState(null);
    async function handleData(){
        try {
            const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
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
    <button className='3day' onClick={() =>{
    handleClick();
    setSevenDay(false);
    setCurrentDay(false)}} disabled={threeDay ? true : false}>3 Day</button>

    <button className='7day' onClick={() =>{
    handleDay();
    setThreeDay(false);
    setCurrentDay(false)}} disabled={sevenDay ? true : false}>1 Week</button>
    <button className='today' onClick={() =>{
    handleToday();
    setSevenDay(false);
    setThreeDay(false);
    }} disabled={currentDay ? true : false}>Today</button>
    {threeDay && <Forecast3 {...data}/>}

        {currentDay && <Today {...data}/>}

        {sevenDay && <Forecast7 {...data}/>}
        <DateTime />
    </div>
    )
 }
