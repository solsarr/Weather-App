export default function Forecast7(data) {
  return (
    <div className="sevenData">
      <div
        className="day1"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date Today: {data.daily.time[0].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[0]}F - High:{" "}
          {data.daily.temperature_2m_max[0]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[0]}"
        </p>
      </div>

      <div
        className="day2"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[1].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[1]}F - High:{" "}
          {data.daily.temperature_2m_max[1]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[1]}"
        </p>
      </div>

      <div
        className="day3"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[2].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[2]}F - High:{" "}
          {data.daily.temperature_2m_max[2]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[2]}"
        </p>
      </div>

      <div
        className="day4"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[3].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[3]}F - High:{" "}
          {data.daily.temperature_2m_max[3]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[3]}"
        </p>
      </div>

      <div
        className="day5"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[4].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[4]}F - High:{" "}
          {data.daily.temperature_2m_max[4]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[4]}"
        </p>
      </div>

      <div
        className="day6"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[5].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[5]}F - High:{" "}
          {data.daily.temperature_2m_max[5]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[5]}"
        </p>
      </div>

      <div
        className="day7"
        style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, .2)" }}
      >
        <p>
          {" "}
          Date: {data.daily.time[6].slice(5)} Low:{" "}
          {data.daily.temperature_2m_min[6]}F - High:{" "}
          {data.daily.temperature_2m_max[6]}F - Inches of rain:{" "}
          {data.daily.precipitation_sum[6]}"
        </p>
      </div>
    </div>
  );
}
