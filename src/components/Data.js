import { useState, useEffect } from "react";
import Forecast3 from "./Three";
import Forecast7 from "./Seven"
import Today from "./Today";

    export default function Data(){
    const [threeDay, setThreeDay] = useState(false);

    const handleClick = () =>{
      setThreeDay(current => !current);
        
    };
    const [sevenDay, setSevenDay] = useState(false);

    const handleDay = event =>{
      setSevenDay(current => !current);
        
    };
    const [currentDay, setCurrentDay] = useState(true);

    const handleToday = event =>{
        setCurrentDay(current => !current);
    };


    return (
        <div>
    <button className='3day' onClick={event =>{
    handleClick();
    setSevenDay(false);
    setCurrentDay(false)}} disabled={threeDay ? true : false}>3 Day</button>

    <button className='7day' onClick={event =>{
    handleDay();
    setThreeDay(false);
    setCurrentDay(false)}} disabled={sevenDay ? true : false}>1 Week</button>
    <button className='today' onClick={event =>{
    handleToday();
    setSevenDay(false);
    setThreeDay(false);
    }} disabled={currentDay ? true : false}>Today</button>
    {threeDay && <Forecast3 />}

        {currentDay && <Today />}

        {sevenDay && <Forecast7 />}

    </div>
    )
 }
// function Box(){
//     return(
//         <div>
//             <h2>box</h2>
//         </div>
//     );
// }