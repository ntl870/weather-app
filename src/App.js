import React, { useState } from "react";
import Cities from "./Components/Cities/Cities";

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
          if (typeof result.main != "undefined") {
            setCities([
              ...cities,
              {
                name: result.name,
                temp: result.main.temp,
                temp_max: result.main.temp_max,
                temp_min: result.main.temp_min
              },
            ]);
          }
          // console.log(result);
        });
    }
  };

  if (typeof weather.main == "undefined") {
    console.log(cities);
    return (
      <div className="App">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
          <Cities cities={cities}/>
        </div>
      </div>
    );
  } else {
    console.log(cities);
    return (
      <div className="App">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
          <Cities 
          cities={cities}
          />
        </div>
      </div>
    );
  }
};

export default App;
