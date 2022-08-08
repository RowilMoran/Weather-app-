
import "./CurrentWeather.css";

const CurrrentWeather = ({ data}) => {
  return (
    <div className="weather">

      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

        <img
          src={`weather-icon/${data.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paramete-label">Detalis</span>
          </div>
          <div className="parameter-row">
            <span className="paramete-label">Feels like</span>
            <span className="paramete-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="paramete-label">Wind</span>
            <span className="paramete-value">{data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="paramete-label">Humidity</span>
            <span className="paramete-value">{data.main.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="paramete-label">Presure</span>
            <span className="paramete-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrrentWeather;
