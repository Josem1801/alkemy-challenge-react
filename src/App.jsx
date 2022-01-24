import React from "react";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout";
import Login from "pages/Login";
import Private from "pages/private";
import RequireAuth from "routes/private.routes";
import Search from "pages/Search";
import Dish from "pages/Dish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="buscar" element={<Search />} />
        <Route path="plato/:dishId" element={<Dish />} />
        <Route element={<RequireAuth />}>
          <Route path="/protected" element={<Private />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
