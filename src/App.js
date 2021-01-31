import React, { useEffect, useState } from "react";
// import SearchBar from "./Components/SearchBar/SearchBar";
import axios from "axios";
const api = {
  key: "61dec65e599e81c7da0ba7b73d1a6349",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [Input, setInput] = useState("");
  const [City, setCity] = useState("");

  const Search = () => {
    fetch(`${api.base}weather?q=London&appid=${api.key}`)
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((result) => {
        console.log(result);
      });
  };

  const fetchData = () => {
    axios({
      method: "GET",
      url: `${api.base}weather?id=2172797&appid=${api.key}`,
    })
      .then((response) => {
        response.json();
      })
      .then((res) => {
        res.json();
        console.log(res);
      });
  };

 

  Search();

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button onClick={() => setCity("New York")}>Search</button>
      </form>
    </div>
  );
};

export default App;
