import React from "react";
import ReactDOM from "react-dom";
import { MainApp } from "./app.js";

ReactDOM.render(
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "18%"
    }}
  >
    <MainApp />
  </div>,
  document.getElementById("root")
);
