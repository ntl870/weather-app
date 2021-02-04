import React, { useState } from "react";
import Cities from "./Components/Cities/Cities";
import "./App.css";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
const api = {
  key: "b1451a60f85568577babe763a87da932",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState("");
  const [cities, setCities] = useState([]);
  const [id, setID] = useState(0);

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
                id: id,
              },
            ]);
            setID(id + 1);
          }
        });
    }
  };

  const deleteCity = (id) => {
    setCities(cities.filter((element) => element.id !== id));
  };

  if (typeof weather.main == "undefined") {
    console.log(cities);
    return (
      <div className="App m-auto">
      <Header/>
        <div className="search-box">
          <input
            id="search-bar"
            type="text"
            className="search-bar form-control w-25 m-auto"
            placeholder="Enter city name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
          <Cities cities={cities} deleteCity={deleteCity} />
        </div>
        <Footer/>
      </div>
    );
  } else {
    console.log(cities);
    return (
      <div className="App m-auto">
      <Header/>
        <div className="search-box">
          <input
            id="search-bar"
            type="text"
            className="search-bar form-control w-25 m-auto"
            placeholder="Enter city name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyPress={search}
            deleteCity={deleteCity}
          />
          <Cities cities={cities} deleteCity={deleteCity} />
        </div>
        <Footer/>
      </div>
    );
  }
};

export default App;
