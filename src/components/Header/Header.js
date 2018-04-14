import React from "react";
import "./Header.css";


// We use JSX curly braces to evaluate the style object

const Header = () => (
    <div className="main-container">
    <div className="jumbotron">
      <h1>Clicky Game!</h1>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
  </div>

);



export default Header;
