// import { useState, useEffect } from "react";



// export default function Forecast(props){
//     const [data, setData] = useState(null);

//     async function handleData(){
//         try {
//             const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&hourly=temperature_2m,precipitation,cloudcover&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch');
//             const weatherData = await foundData.json()
//             setData(weatherData.dataseries)
//             console.log(weatherData)
//         //    day1 = data.slice(0,7);

//         } catch(err){
//             console.log(err)
//         }
//     }
//    useEffect(() => {
//         handleData();dataseries
//     }, []);


// //  const day1 = data.slice(0,8).map((data,index)=>{
// //         return(
// //             {data.timepoint}
// //         )


// //     return (
// //         <div>
      
// //     {data.slice(0,8).map((data,index)=>{
// //         return(
// //             <p>{data.timepoint}</p>
            
                
            
// //         )
// //     })};
// //         </div> 
    
// //     )
       
    


// }

