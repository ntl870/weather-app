import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <nav className="navbar" >
      <div className="container text-light" id="main-nav">
        <h2>
          Weather App <i class="far fa-cloud"></i>
        </h2>
      </div>
    </nav>
  );
};

export default Header;
