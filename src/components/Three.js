export default function Forecast3(data) {
  return (
    <div className="threeData">
      <div
        className="dayOne"
        style={{
          border: "1px solid black",
          borderColor: "rgba(0, 0, 0, .2)",
          backgroundColor: "rgba(255,255,255, .2",
        }}
      >
        <p>
          {" "}
          Date Today {data.daily.time[0].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[0]}F - High:{" "}
          {data.daily.temperature_2m_max[0]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[0]}"
        </p>
      </div>

      <div
        className="dayTwo"
        style={{
          border: "1px solid black",
          borderColor: "rgba(0, 0, 0, .2)",
          backgroundColor: "rgba(255,255,255, .2",
        }}
      >
        <p>
          {" "}
          Date {data.daily.time[1].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[1]}F - High:{" "}
          {data.daily.temperature_2m_max[1]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[1]}"
        </p>
      </div>

      <div
        className="dayThree"
        style={{
          border: "1px solid black",
          borderColor: "rgba(0, 0, 0, .2)",
          backgroundColor: "rgba(255,255,255, .2",
        }}
      >
        <p>
          {" "}
          Date {data.daily.time[2].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[2]}F - High:{" "}
          {data.daily.temperature_2m_max[2]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[2]}"
        </p>
      </div>
    </div>
  );
}
