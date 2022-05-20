import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
