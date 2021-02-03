import React, { useState } from "react";
import Cities from "./Components/Cities/Cities";
import "./App.css";

const api = {
  key: "b1451a60f85568577babe763a87da932",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState("");
  const [cities, setCities] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setInput("");
          console.log(result);
          if (typeof result.main != "undefined") {
            setCities([
              ...cities,
              {
                weather: result.weather[0].main,
                name: result.name,
                country: result.sys.country,
                temp: result.main.temp,
                temp_max: result.main.temp_max,
                temp_min: result.main.temp_min,
                humidity: result.main.humidity,
                wind_speed: result.wind.speed,
              },
            ]);
          }
        });
    }
  };

  if (typeof weather.main == "undefined") {
    console.log(cities);
    return (
      <div className="App m-auto">
        <div className="search-box">
          <input
            id="search-bar"
            type="text"
            className="search-bar form-control w-25 m-auto"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
          <i className="fas fa-search"></i>
          <Cities cities={cities} />
        </div>
      </div>
    );
  } else {
    console.log(cities);
    return (
      <div className="App m-auto">
        <div className="search-box">
          <input
            id="search-bar"
            type="text"
            className="search-bar form-control w-25 m-auto"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
          <i className="fas fa-search"></i>
          <Cities cities={cities} />
        </div>
      </div>
    );
  }
};

export default App;
