import React, {createContext, useState} from "react";
import PropTypes from "prop-types";
export const UserContext = createContext();

export default function UserContextPriver({children}){
  const [jwt, setJwt] = useState(() => window.localStorage.getItem("jwt"));
  
  return <UserContext.Provider value={{jwt, setJwt}}>{children}</UserContext.Provider>;
}


UserContextPriver.propTypes = {
  children: PropTypes.node
};