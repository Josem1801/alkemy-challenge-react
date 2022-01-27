import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
export const MenuContext = createContext();

function menuReducer(state, action) {
  const { dishs } = state;
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "ADD_DISH":
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
  name: "",
  dishs: [],
  totalPrice: 0,
  healthScore: 0,
  preparationTime: 0,
  veganFoodCounter: 0,
};
export default function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initialValue);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

function executeError(text) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
}
export function useMenu() {
  const { state, dispatch } = useContext(MenuContext);
  const { veganFoodCounter, dishs } = state;
  console.log(state);
  function addToMenu(dish) {
    if (dishs.length >= 4) {
      executeError("Solo puedes agregar 4 platos");
      return;
    }
    if (veganFoodCounter >= 2 && dish.isVegan) {
      executeError("Solo puedes agregar como maximo 2 platos veganos");
      return;
    }

    if (dishs.length - veganFoodCounter >= 2 && !dish.isVegan) {
      executeError("Necesitas agregar un minimo de 2 platos veganos");
      return;
    }

    dispatch({ type: "ADD_DISH", payload: dish });
  }
  function removeFromMenu(dishId, removedIsVegan) {
    dispatch({ type: "REMOVE_DISH", payload: { dishId, removedIsVegan } });
  }
  return { menu: state, addToMenu, removeFromMenu };
}

MenuProvider.propTypes = {
  children: PropTypes.node,
};
