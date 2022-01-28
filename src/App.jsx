import React from "react";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout";
import Login from "pages/Login";
import RequireAuth from "routes/private.routes";
import Search from "pages/Search";
import Dish from "pages/Dish";
import Loged from "routes/loged.routes";
import NotFound from "pages/404";
import SearchProvider from "context/SearchContext";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Loged />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<SearchProvider />}>
            <Route index element={<Home />} />
            <Route path="buscar" element={<Search />} />
          </Route>
          <Route path="plato/:dishId" element={<Dish />} />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
