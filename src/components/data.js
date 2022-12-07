import { useEffect, useState } from "react";




export default function Data(props){
    const [data, setData] = useState(null);

    async function handleData(){
        try {
            const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=77.4977&lat=27.2044&product=civil&output=json');
            const weatherData = await foundData.json()
            console.log(weatherData)
            setData(weatherData.dataseries)
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
console.log(data)


    return (
        <div className="data">
        {/* <h1>{data.init}</h1>    */}
        <p>{data[0].weather}</p>
        {data.slice(0,8).map((data,index)=>{
            return(
                <p>{data.timepoint}</p>
                
                    
                
            )
        })}
        <p></p>
        </div>
    )

}