import React from "react";
import "./Cities.css";

const Cities = (props) => {
  return (
    <div className="Cities">
      <div className="container text-center">
        <div className="row col-sm-4">
          {props.cities.map((element) => {
            return (
              <div>
                <h1>{element.temp}</h1>
                <h1>{element.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cities;
