import React from "react";
import "./Button.css";


const Button = (props) => (
  <a id="home-btn" href={props.directory}>{props.button}</a>
);
 

export default Button;
