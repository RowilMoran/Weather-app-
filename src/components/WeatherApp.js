import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import CurrrentWeather from "./current-weather/CurrrentWeather";
import Forecast from "./forecast/Forecast";
import Loader from "./loader/Loader";
import Search from "./search/Search";

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setLoading(true);
    setCurrentWeather(null);
    setForecast(null);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
        setLoading(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="weatherContainer">
      <Search onSearchChange={handleOnSearchChange} />
      {loading && <Loader />}
      {currentWeather && <CurrrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default WeatherApp;
