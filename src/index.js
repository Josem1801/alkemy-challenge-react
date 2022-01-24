import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextPriver from "context/UserContext";
import "index.css";
ReactDOM.render(
  <BrowserRouter>
    <UserContextPriver>
      <App />
    </UserContextPriver>
  </BrowserRouter>,
  document.getElementById("root")
);
