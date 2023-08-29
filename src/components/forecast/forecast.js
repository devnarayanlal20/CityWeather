import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  const daily_forecast = [];
  daily_forecast.push(
    data.list[0],
    data.list[0 + 8],
    data.list[0 + 16],
    data.list[0 + 24],
    data.list[0 + 32]
  );

  return (
    <>
      <label htmlFor="" className="title">
        {" "}
        Daily{" "}
      </label>
      <Accordion allowZeroExpanded>
        {daily_forecast.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt=""
                    className="icon-small"
                  />
                  <label htmlFor="" className="day">
                    {forecastDay[idx]}
                  </label>

                  <label htmlFor="" className="description">
                    {item.weather[0].main}
                  </label>

                  <label htmlFor="" className="temp">
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-detail-grid">
                <div className="daily-detail-grid-item">
                  <span className="value">Description</span>
                  <span className="label">{item.weather[0].description}</span>
                </div>
                <div className="daily-detail-grid-item">
                  <span className="value">Humidity</span>
                  <span className="label">{item.main.humidity} %</span>
                </div>
                <div className="daily-detail-grid-item">
                  <span className="value">Wind</span>
                  <span className="label">{item.wind.speed} m/s</span>
                </div>
                <div className="daily-detail-grid-item">
                  <span className="value">Pressure</span>
                  <span className="label">{item.main.pressure} hPa</span>
                </div>

                <div className="daily-detail-grid-item">
                  <span className="value">Clouds</span>
                  <span className="label">{item.clouds.all} %</span>
                </div>
                <div className="daily-detail-grid-item">
                  <span className="value">Visibility</span>
                  <span className="label">{item.visibility} m</span>
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
