import React from "react";
import "./Cities.css";
const Cities = (props) => {
  const Floor_temp = (tempreture) => {
    if (Math.floor(tempreture + 0.5) > Math.floor(tempreture)) {
      return Math.floor(tempreture + 0.5);
    } else {
      return Math.floor(tempreture);
    }
  };

  return (
    <div className="Cities">
      <div className="container">
        <div className="row m-auto">
          {props.cities.map((element) => {
            let temp_icon;
            if (element.temp > 10) {
              temp_icon = (
                <h1>
                  {Floor_temp(element.temp)}&#8451;{" "}
                  <i className="fal fa-temperature-hot"></i>
                </h1>
              );
            } else {
              temp_icon = (
                <h1>
                  {Floor_temp(element.temp)}&#8451;{" "}
                  <i className="fal fa-temperature-frigid"></i>
                </h1>
              );
            }

            let humi_icon;
            if (element.humidity <= 50) {
              humi_icon = (
                <h1>
                  {element.humidity}% <i className="far fa-dewpoint"></i>
                </h1>
              );
            } else {
              humi_icon = (
                <h1>
                  {element.humidity}% <i className="fad fa-dewpoint"></i>
                </h1>
              );
            }

            let weather_icon, background_img;
            switch (element.weather) {
              case "Clouds":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-clouds"></i>
                  </h2>
                );
                background_img = "url(/img/clouds-blur.jpg)";
                break;
              case "Snow":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-snowflake"></i>
                  </h2>
                );
                background_img = "url(/img/snow-blur.jpg)";
                break;
              case "Clear":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-sun"></i>
                  </h2>
                );
                background_img = "url(/img/clear-blur.jpg)";
                break;
              case "Mist":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-fog"></i>
                  </h2>
                );
                background_img = "url(/img/mist-blur.jpg)";
                break;
              case "Rain":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-cloud-rain"></i>
                  </h2>
                );
                background_img = "url(/img/rain-blur.jpg)";
                break;
              case "Drizzle":
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-cloud-drizzle"></i>
                  </h2>
                );
                background_img = "url(/img/drizzle-blur.jpg)";
                break;
              default:
                weather_icon = (
                  <h2 id="weather-icon">
                    {element.weather} <i class="far fa-cloud-drizzle"></i>
                  </h2>
                );
                background_img = "url(/img/drizzle-blur.jpg)";
                break;
            }
            return (
              <div id="main-city" className="col-lg-6 mt-5">
                <div
                  id="city"
                  className="d-block m-auto"
                  style={{ backgroundImage: `${background_img}` }}
                >
                  {weather_icon}
                  <button
                    id="del-button"
                    className="btn btn-outline-dark rounded-circle"
                    onClick={()=>props.deleteCity(element.id)}
                  >
                    <i className="far fa-times-circle"></i>
                  </button>
                  <h1>
                    {element.name}, {element.country}
                  </h1>
                  {temp_icon}

                  <div id="min-max" className="row">
                    <h3 className="mr-5 pr-3">
                      {Floor_temp(element.temp_min)} &#8451;
                    </h3>
                    <h3 className="ml-5 pl-3">
                      {Floor_temp(element.temp_max)} &#8451;
                    </h3>
                  </div>

                  {humi_icon}
                  <h1>
                    {(element.wind_speed * 3.6).toFixed(2)} km/h{" "}
                    <i class="far fa-wind"></i>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cities;
