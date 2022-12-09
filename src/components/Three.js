export default function Forecast3(data){
   

 
    
    
        return (
            <div className="7day">
    
            <div className="day1">
                <p> Date Today {data.daily.time[0].slice(5)}
                 Low: {data.daily.temperature_2m_min[0]}F 
                 - High: {data.daily.temperature_2m_max[0]}F  
                 - Inches of rain: {data.daily.precipitation_sum[0]}"</p>
            </div>
    
            <div className="day2">
                <p> Date {data.daily.time[1].slice(5)} Low: {data.daily.temperature_2m_min[1]}F - High: {data.daily.temperature_2m_max[1]}F - Inches of rain: {data.daily.precipitation_sum[1]}"</p>
            </div>
    
            <div className="day3">
                <p> Date {data.daily.time[2].slice(5)} Low: {data.daily.temperature_2m_min[2]}F - High: {data.daily.temperature_2m_max[2]}F - Inches of rain: {data.daily.precipitation_sum[2]}"</p>
            </div>
            
                </div>
        )
        } 