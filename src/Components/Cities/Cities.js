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
            return (
              <div className="text-light col-md-6">
                <div id="city" className="d-block bg-primary m-auto">
                  <h2>{element.weather}</h2>
                  <h1>
                    {element.name}, {element.country}
                  </h1>
                  <h1>{Floor_temp(element.temp)} &#8451;</h1>
                  <div id="min-max" className="row">
                    <h3 className="mr-5 pr-3">
                      {Floor_temp(element.temp_min)} &#8451;
                    </h3>
                    <h3 className="ml-5 pl-3">
                      {Floor_temp(element.temp_max)} &#8451;
                    </h3>
                  </div>
                  <h1>{element.humidity}%</h1>
                  <h1>{(element.wind_speed * 3.6).toFixed(2)} km/h</h1>
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
