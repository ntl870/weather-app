import React, { useState } from "react";

const SearchBar = (props) => {
  const [Input, setInput] = useState("");
  const [City, setCity] = useState("");
  return (
    <form>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCity(Input)}>Search</button>
    </form>
  )
};

export default SearchBar;
