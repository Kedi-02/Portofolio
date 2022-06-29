// By default er det sånn:
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Sånn hadde han:
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.querySelector("#root"));
