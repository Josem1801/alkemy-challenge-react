import React, { createContext, useContext, useState } from "react";

import { Outlet } from "react-router-dom";
export const SearchContext = createContext();

export default function SearchProvider() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Outlet />
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const { search, setSearch } = useContext(SearchContext);
  return { search, setSearch };
}
