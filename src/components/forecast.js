import { useState, useEffect } from "react";



export default function Forecast(props){
    const [data, setData] = useState(null);

    async function handleData(){
        try {
            const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=77.4977&lat=27.2044&product=civil&output=json');
            const weatherData = await foundData.json()
            setData(weatherData.dataseries)
            console.log(weatherData)
        //    day1 = data.slice(0,7);

        } catch(err){
            console.log(err)
        }
    }
   useEffect(() => {
        handleData();
    }, []);


//  const day1 = data.slice(0,8).map((data,index)=>{
//         return(
//             {data.timepoint}
//         )


    // return (
    //     <div>
      
    // {data.slice(0,8).map((data,index)=>{
    //     return(
    //         <p>{data.timepoint}</p>
            
                
            
    //     )
    // })};
    //     </div> 
    
    // )
       
    


}

