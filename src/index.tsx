import React from "react";
import ReactDOM from "react-dom";
import "url-search-params-polyfill";
import "./index.css";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
