import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIKEY, BASEURL } from "../Network/network";

const Forecastpage = ({ Location }) => {
  const [forecastData, setForecastData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const getForecast = () => {
    axios
      .get(
        `${BASEURL}/forecast.json?key=${APIKEY}&q=${Location}&days=1&aqi=no&alerts=no`
      )
      .then((response) => {
        const weatherData = response.data;
        setForecastData(weatherData);
      })
      .catch((error) => {
        console.log("Response Error", error);
      });
  };

  useEffect(() => {
    getForecast();
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [Location]);

  return (
    <div>
      {forecastData && forecastData.forecast && (
        <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        
          <h2>Location: {forecastData.location.name}</h2>
          <p>Region: {forecastData.location.region}</p>
          <p>Country: {forecastData.location.country}</p>
          <p>Local Time: {forecastData.location.localtime}</p>

          <p>Current Time: {currentTime.toLocaleTimeString()}</p>

          {forecastData.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <h2>Date: {day.date}</h2>
              <p>Average Temperature: {day.day.avgtemp_c}°C</p>
              <p>Condition: {day.day.condition.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forecastpage;
