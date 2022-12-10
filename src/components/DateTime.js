import React, { useState, useEffect } from "react";

export const DateTime = (data) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="time">
      <p>
        {" "}
        Time : {date.toLocaleTimeString()}
        {data.daily.weathercode[0] === 0 ? (
          <span className="material-symbols-rounded">sunny</span>
        ) : data.daily.weathercode[0] === 3 ? (
          <span className="material-symbols-rounded">cloudy</span>
        ) : data.daily.weathercode[0] === 51 ||
          53 ||
          55 ||
          61 ||
          63 ||
          65 ||
          80 ||
          81 ||
          82 ? (
          <span class="material-symbols-rounded">rainy</span>
        ) : data.daily.weathercode[0] === 71 || 73 || 75 || 77 || 85 || 86 ? (
          <span className="material-symbols-rounded">cloudy_snowing</span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};
export default DateTime;
