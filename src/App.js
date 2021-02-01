import React, { useState } from "react";

const api = {
  key: "b1451a60f85568577babe763a87da932",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setInput("");
          // console.log(result);
        });
    }
  };
  if (typeof weather.main == "undefined") {
    console.log(weather)
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
        </div>
      </div>
    );
  } else {
    console.log(weather);
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
          <h1>{weather.main.temp}</h1>
        </div>
      </div>
    );
  }
};

export default App;
