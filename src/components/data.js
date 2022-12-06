import { useEffect, useState } from "react";




export default function Data(){
    const [data, setData] = useState(null);


    async function handleData(){
        try {
            const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=71.41&lat=41.82&product=civil&output=json');
            const weatherData = await foundData.json()
            console.log(weatherData)
            setData(weatherData)
            console.log(data.dataseries[0].weather)
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
        <h1>{data.dataseries[0].temp2m}</h1>    
        <p>{data.dataseries[0].weather}</p>
        <p></p>
        </div>
    )

}