export default function Today(data) {
  console.log(data);

  return (
    <div>
      <div className="today">
        <h1 className="todayLow"></h1>
        <h1>Date Today: {data.daily.time[0].slice(5)}</h1>
        <h1> Low: {data.daily.temperature_2m_min[0]}F </h1>
        <h1 className="todayHigh">
          {" "}
          High: {data.daily.temperature_2m_max[0]}F
        </h1>
        <h1 className="todayRain">
          {" "}
          Inches of rain: {data.daily.precipitation_sum[0]}"{" "}
          <div className="icon">
            {data.daily.weathercode[0] === 0 ? (
              <div>
                <span className="material-symbols-rounded">sunny</span>
              </div>
            ) : data.daily.weathercode[0] === 3 ? (
              <div>
                <span className="material-symbols-rounded">sunny</span>
              </div>
            ) : data.daily.weathercode[0] === 51 ||
              53 ||
              55 ||
              61 ||
              63 ||
              65 ||
              80 ||
              81 ||
              82 ? (
              <div>
                <span class="material-symbols-rounded">rainy</span>
              </div>
            ) : (
              data.daily.weathercode[0] === 71 ||
              73 ||
              75 ||
              77 ||
              85 ||
              86(<></>)
            )}
          </div>
        </h1>
        <h1>Wind Speed MPH: {data.daily.windspeed_10m_max[0]}</h1>
      </div>
    </div>
  );
}
