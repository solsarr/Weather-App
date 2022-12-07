import Data from "./data"
import { useState, useEffect } from "react"

export default function Base(){
 const [data, setData] = useState(null);
// console.log(time.dataseries[0].weather, 'testing')
async function handleData(){
   

    try {
        const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=77.4977&lat=27.2044&product=civil&output=json');
        const weatherData = await foundData.json()
        console.log(weatherData)
        setData(weatherData.dataseries)
    } catch(err){
        console.log(err)
    }
}
useEffect(() => {
    handleData();
}, []);



// array.map((array,index) => {
//     return (
//         <div>
//             <h1>{array.temp2m}</h1>
//         </div>
//     )
// })

    return (
        <div>
            
        </div>
        
    )
}