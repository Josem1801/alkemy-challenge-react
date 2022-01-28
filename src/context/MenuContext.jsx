import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const MenuContext = createContext();

function menuReducer(state, action) {
  const { dishs, veganFoodCounter } = state;
  const { type, payload } = action;

  switch (type) {
    case "ADD_DISH":
      if (dishs.length >= 4) {
        executeError("Solo puedes agregar 4 platos");
        return { ...state };
      }
      if (veganFoodCounter >= 2 && payload.isVegan) {
        executeError("Solo puedes agregar como maximo 2 platos veganos");
        return { ...state };
      }

      if (dishs.length - veganFoodCounter >= 2 && !payload.isVegan) {
        executeError("Necesitas agregar un minimo de 2 platos veganos");
        return { ...state };
      }

      return {
        ...state,
        dishs: [...dishs, payload],
        veganFoodCounter: payload.isVegan
          ? (state.veganFoodCounter += 1)
          : state.veganFoodCounter,
      };
    case "REMOVE_DISH":
      return {
        ...state,
        dishs: state.dishs.filter(({ id }) => id !== payload.dishId),
        veganFoodCounter: payload.removedIsVegan
          ? (state.veganFoodCounter -= 1)
          : state.veganFoodCounter,
      };
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
const initialValue = {
  dishs: [],
  veganFoodCounter: 0,
};
export default function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(
    menuReducer,
    JSON.parse(window.localStorage.getItem("menu")) || initialValue
  );
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

MenuProvider.propTypes = {
  children: PropTypes.node,
};

function executeError(text) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
}
