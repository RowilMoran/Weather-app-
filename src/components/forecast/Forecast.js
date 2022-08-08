import "./Forecast.css";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";


const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  console.log(data);
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  
  return (
    <>
      <label className="title">Daily</label>
  
      <Accordion>
        {data.list.slice(0, 7).map((el, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`weather-icon/${el.weather[0].icon}.png`}
                    alt="weather-icon"
                    className="icon-smalll"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {el.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(el.main.temp_min)}°C/
                    {Math.round(el.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="forecast-extra-info">
                <div className="forecast-side-panel">
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Pressure</p>
                    <p>{el.main.pressure}hPa</p>
                  </div>
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Clouds</p>
                    <p>{el.clouds.all} %</p>
                  </div>
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Sea Level</p>
                    <p>{el.main.sea_level} m</p>
                  </div>
                </div>
                <div className="forecast-side-panel">
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Humidity</p>
                    <p>{el.main.humidity} %</p>
                  </div>
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Wind Speed</p>
                    <p>{el.wind.speed} m/s</p>
                  </div>
                  <div className="forecast-item">
                    <p className="parameter-label-forecast">Feels Like</p>
                    <p>{el.main.feels_like} C</p>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
