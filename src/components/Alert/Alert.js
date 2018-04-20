import React from "react";
import "./Alert.css";

const Alert = props =>
  <div
    className={`alert alert-${props.type} fade in`}
    style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
  >
    {props.children}
  </div>;

export default Alert;
