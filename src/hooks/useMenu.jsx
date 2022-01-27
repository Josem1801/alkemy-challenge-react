import { MenuContext } from "context/MenuContext";
import { useCallback, useContext, useEffect } from "react";

export function useMenu() {
  const { state, dispatch } = useContext(MenuContext);

  function addToMenu(dish) {
    dispatch({ type: "ADD_DISH", payload: dish });
  }
  function removeFromMenu(dishId, removedIsVegan) {
    dispatch({ type: "REMOVE_DISH", payload: { dishId, removedIsVegan } });
  }

  const menuPrice = useCallback(() => acumulate(state.dishs, "price"), [state]);

  const healthScore = useCallback(
    () => acumulate(state.dishs, "healthScore"),
    [state]
  );

  const readyInMinutes = useCallback(
    () => acumulate(state.dishs, "readyInMinutes"),
    [state]
  );

  useEffect(
    () => window.localStorage.setItem("menu", JSON.stringify(state)),
    [state]
  );
  return {
    menu: state,
    menuPrice,
    healthScore,
    readyInMinutes,
    addToMenu,
    removeFromMenu,
  };
}

function acumulate(dishs, tag) {
  let total = dishs.map((recipe) => recipe[tag]).reduce((a, b) => a + b);
  total = total % 1 == 0 ? total : total.toFixed(2);
  return total;
}
