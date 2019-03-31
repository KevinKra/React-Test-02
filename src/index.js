import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Router from "./components/Router.js";
import "./css/index.css";
render(<Router />, document.querySelector("#root"));
