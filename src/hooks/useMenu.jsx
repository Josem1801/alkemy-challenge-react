import { MenuContext } from "context/MenuContext";
import { useState, useContext, useEffect } from "react";

export function useMenu() {
  const { state, dispatch } = useContext(MenuContext);
  const [menuPrice, setMenuPrice] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [readyInMinutes, setReadyInMinutes] = useState(0);
  function addToMenu(dish) {
    dispatch({ type: "ADD_DISH", payload: dish });
  }
  function removeFromMenu(dishId, removedIsVegan) {
    dispatch({ type: "REMOVE_DISH", payload: { dishId, removedIsVegan } });
  }

  useEffect(() => {
    setMenuPrice(acumulate(state.dishs, "price"));
    setHealthScore(acumulate(state.dishs, "healthScore"));
    setReadyInMinutes(acumulate(state.dishs, "readyInMinutes"));
    window.localStorage.setItem("menu", JSON.stringify(state));
  }, [state]);
  return {
    menu: state,
    menuPrice,
    healthScore,
    readyInMinutes,
    addToMenu,
    removeFromMenu,
  };
}

//Funcion acumuladora para sumar
function acumulate(dishs, tag) {
  let total = dishs.map((recipe) => recipe[tag]).reduce((a, b) => a + b, 0);
  //Si el numero no es entero, lo parsea a 2 decimales
  total = total % 1 == 0 ? total : total.toFixed(2);
  return Number(total);
}
