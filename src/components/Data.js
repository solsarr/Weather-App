import { useState, useEffect } from "react";
import Forecast3 from "./Three";
import Forecast7 from "./Seven";
import Today from "./Today";
import DateTime from "./DateTime";


export default function Data() {
  const [threeDay, setThreeDay] = useState(false);
 
  const handleClick = () => {
    setThreeDay((current) => !current);
  };
  const [sevenDay, setSevenDay] = useState(false);

  const handleDay = () => {
    setSevenDay((current) => !current);
  };
  const [currentDay, setCurrentDay] = useState(true);

  const handleToday = () => {
    setCurrentDay((current) => !current);
  };
  const [data, setData] = useState(null);

 
  async function handleData(paramLat, paramLon) {
    try { 
      console.log(paramLat, paramLon)
      const foundData = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${paramLat}&longitude=${paramLon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
      );
      const weatherData = await foundData.json();
      setData(weatherData);
      console.log({data})
    } catch (err) {
      console.log(err);
    }
  }  
   
  async function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      handleData(position.coords.latitude, position.coords.longitude)
    });
  }  
  
  useEffect(() => { 
    componentDidMount()
  }, []);

  if (data == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="dataWrap" style={{ border: "1px solid black" }}>
        <div className="time" style={{ border: "1px solid black" }}>
          <DateTime />
        </div>
        {threeDay && <Forecast3 {...data} />}

        {currentDay && <Today {...data} />}

        {sevenDay && <Forecast7 {...data} />}
      </div>
      <div className="btnWrap" style={{ border: "1px solid black" }}>
       

        <button
          className="seven"
          onClick={() => {
            handleDay();
            setThreeDay(false);
            setCurrentDay(false);
          }}
          disabled={sevenDay ? true : false}
        >
          7 Day
        </button>
        <button
          className="three"
          onClick={() => {
            handleClick();
            setSevenDay(false);
            setCurrentDay(false);
          }}
          disabled={threeDay ? true : false}
        >
          3 Day
        </button>
        <button
          className="todayBtn"
          onClick={() => {
           handleToday();
            setSevenDay(false);
            setThreeDay(false);
          }}
          disabled={currentDay ? true : false}
        >
          Today
        </button>
      </div>
    </div>
  );
}