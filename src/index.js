import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "context/UserContext";
import "index.css";
import MenuProvider from "context/MenuContext";
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
