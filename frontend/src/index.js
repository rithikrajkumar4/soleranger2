import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import store from "../src/redux/store";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <AlertProvider template={() => AlertTemplate} {...options}>
=======
>>>>>>> d3ecaf22083864ea87c926f73351ec4ec217a683
        <App />
    </Provider>
  </React.StrictMode>
);
