import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.localStorage.getItem("jwt"));

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};
