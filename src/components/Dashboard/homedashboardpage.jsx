import React, { useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { APIKEY } from "../Network/network";
import { BASEURL } from "../Network/network";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homedashboardpage = ({Location}) => {
  const [weatherData, setweatherData] = useState(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );
  console.log('Location:',Location );

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Report",
      },
    },
  };

  const data = {
    labels: [
      "Cloud",
      "Feels Like (°C)",
      "Gust (km/h)",
      "Humidity (%)",
      "Pressure (mb)",
    ],
    datasets: [
      {
        label: "Current Weather",
        data: [
          weatherData && weatherData.current.cloud,
          weatherData && weatherData.current.feelslike_c,
          weatherData && weatherData.current.gust_kph,
          weatherData && weatherData.current.humidity,
          weatherData && weatherData.current.pressure_mb,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const getWeather = () => {
    axios
      .get(`${BASEURL}/current.json?key=${APIKEY}&q=${Location}&aqi=no`)

      .then((response) => {
        const weatherData = response.data;
        setweatherData(weatherData);
        console.log(weatherData);
      })
      .catch((error) => {
        console.log("Response Error", error);
      });
  };
  useEffect(() => {
    getWeather();
  }, [Location]);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display two charts side by side
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        {weatherData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Temperature in &deg;C
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData?.current.temp_c}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Temperature in &deg;F
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData?.current.temp_f}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  UV Index
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData?.current.uv}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Pressure in mb
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData?.current.pressure_mb}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Condition
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-1xl text-blue-900 hover:text-gray-900">
                  {weatherData.current.condition.text}
                  <img
                    src={weatherData.current.condition.icon}
                    alt="Weather Icon"
                  />
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Wind Speed km/h
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData.current.wind_kph}{" "}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Humidity %
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData.current.humidity}
                </p>
              </div>
            </div>
            <div className="bg-white card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div className="m-3">
                <h2 className="font-bold  mb-1 text-black">
                  Visibility Km
                  <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right">
                    {weatherData?.location?.name}
                  </span>
                </h2>
                <p className="font-bold font-mono text-4xl text-blue-900 hover:text-gray-900">
                  {weatherData?.current.vis_km}
                </p>
              </div>
            </div>
            <div
              className="bg-white card m-3 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
              style={{ width: "600px" }}
            >
              <div className="flex justify-center">
                <div style={{ width: "500px", height: "300px" }}>
                  <Slider {...settings}>
                    <div>
                      <Bar options={options} data={data} />
                    </div>
                    <div>
                      <Line options={options} data={data} />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Homedashboardpage;
