import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
export const MenuContext = createContext();

function menuReducer(state, action) {
  let isVegan;

  switch (action.type) {
    case "ADD_DISH":
      if (state.dishs.length >= 4) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Solo puedes agregar 4 platos",
        });
        return { ...state };
      }
      if (state.veganFoodCounter > 2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Solo puedes agregar como maximo 2 platos veganos",
        });
        return { ...state };
      }
      if (!action.payload.isVegan && state.dishs.length + 1 >= 3) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Necesitas agregar minimo 2 platos veganos",
        });
        return { ...state };
      }

      return {
        ...state,
        dishs: [...state.dishs, action.payload],
        veganFoodCounter: action.payload.isVegan
          ? (state.veganFoodCounter += 1)
          : state.veganFoodCounter,
      };
    case "REMOVE_DISH":
      return {
        ...state,
        dishs: state.dishs.filter(({ id, isVegan: vegan }) => {
          isVegan = vegan;
          return id !== action.payload;
        }),
        veganFoodCounter: isVegan
          ? (state.veganFoodCounter -= 1)
          : state.veganFoodCounter,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const initialValue = {
  name: "",
  dishs: [],
  totalPrice: 0,
  healtScore: 0,
  preparationTime: 0,
  veganFoodCounter: 0,
};
export default function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initialValue);
  console.log(state);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const { state, dispatch } = useContext(MenuContext);
  function addToMenu(dish) {
    dispatch({ type: "ADD_DISH", payload: dish });
  }
  function removeFromMenu(dishId) {
    dispatch({ type: "REMOVE_DISH", payload: dishId });
  }
  return { menu: state, addToMenu, removeFromMenu };
}

MenuProvider.propTypes = {
  children: PropTypes.node,
};
