export default function Today(data) {
    
  return (
    <div>
      <div style={{border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)",backgroundColor: 'rgba(255,255,255, .2' }} className="today">
        <h1 className="todayLow"></h1>
        <h1>Date Today: {data.daily.time[0].slice(5)}</h1>
        <h1> Low: {data.daily.temperature_2m_min[0]}F </h1>
        <h1 className="todayHigh">
          {" "}
          High: {data.daily.temperature_2m_max[0]}F
        </h1>
        <h1 className="todayRain">
          {" "}
          Inches of rain: {data.daily.precipitation_sum[0]}"
        </h1>
        <h1>Wind Speed MPH: {data.daily.windspeed_10m_max[0]}</h1>
      </div>
    </div>
  );
}