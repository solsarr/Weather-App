import {useState} from "react";
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
    {threeDay && <Forecast3 />}

        {currentDay && <Today />}

        {sevenDay && <Forecast7 />}
        <DateTime />
    </div>
    )
 }
