import Data from "./Data"
import { useState, useEffect } from "react"

export default function Seven(props){
 console.log(props, 'seven')

 return (
    <div className="7day">

    <div className="day1">
        <p> Today: Low: {data.daily.temperature_2m_min[0]}F - High: {data.daily.temperature_2m_max[0]}F  - Inches of rain: {data.daily.precipitation_sum[0]}"</p>
    </div>

    <div className="day2">
        <p> Day 2: Low: {data.daily.temperature_2m_min[1]}F - High: {data.daily.temperature_2m_max[1]}F - Inches of rain: {data.daily.precipitation_sum[1]}"</p>
    </div>

    <div className="day3">
        <p> Day 3: Low: {data.daily.temperature_2m_min[2]}F - High: {data.daily.temperature_2m_max[2]}F - Inches of rain: {data.daily.precipitation_sum[2]}"</p>
    </div>

    <div className="day4">
     <p> Day 4: Low: {data.daily.temperature_2m_min[3]}F - High: {data.daily.temperature_2m_max[3]}F - Inches of rain: {data.daily.precipitation_sum[3]}"</p>
    </div>

    <div className="day5">
        <p> Day 5: Low: {data.daily.temperature_2m_min[4]}F - High: {data.daily.temperature_2m_max[4]}F - Inches of rain: {data.daily.precipitation_sum[4]}"</p>
    </div>       

    <div className="day6">
     <p> Day 6: Low: {data.daily.temperature_2m_min[5]}F - High: {data.daily.temperature_2m_max[5]}F - Inches of rain: {data.daily.precipitation_sum[5]}"</p>
    </div>

    <div className="day7">
        <p> Day 7: Low: {data.daily.temperature_2m_min[6]}F - High: {data.daily.temperature_2m_max[6]}F - Inches of rain: {data.daily.precipitation_sum[6]}"</p>
    </div>
    
        
        </div>
)




























}