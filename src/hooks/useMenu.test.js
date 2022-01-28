// example.test.js

import React from "react";

import MenuProvider from "context/MenuContext";
import { useMenu } from "./useMenu";
import { renderHook, act } from "@testing-library/react-hooks";
const veganRecipe = {
  isVegan: true,
  healthScore: 90,
  price: 168.12,
  id: 654959,
  readyInMinutes: 45,
};
const recipeNoVegan = {
  isVegan: false,
  healthScore: 90,
  price: 168.12,
  id: 654959,
  readyInMinutes: 45,
};
const wrapper = ({ children }) => <MenuProvider>{children}</MenuProvider>;

describe("Testeando el hook useMenu, y contenga la suma de caracteristicas sus correctas", () => {
  test("Agregar y eliminar una receta vegana correctamente", () => {
    //result
    const { result } = renderHook(() => useMenu(), { wrapper });
    act(() => {
      result.current.addToMenu(veganRecipe);
    });
    //expect
    expect(result.current.menu.dishs).toContain(veganRecipe);
    expect(result.current.menu.dishs.length).toEqual(1);
    expect(result.current.menu.veganFoodCounter).toEqual(1);
    expect(result.current.healthScore).toEqual(veganRecipe.healthScore);
    expect(result.current.menuPrice).toEqual(veganRecipe.price);
    expect(result.current.readyInMinutes).toEqual(veganRecipe.readyInMinutes);
    act(() => {
      result.current.removeFromMenu(veganRecipe.id, veganRecipe.isVegan);
    });
    expect(result.current.menu.dishs.length).toEqual(0);
  });

  test("Agregar maximo 2 recetas veganas", () => {
    const { result } = renderHook(() => useMenu(), { wrapper });
    act(() => {
      result.current.addToMenu(veganRecipe);
      result.current.addToMenu(veganRecipe);
      result.current.addToMenu(veganRecipe);
    });
    expect(result.current.menu.dishs.length).toEqual(2);
    expect(result.current.menu.veganFoodCounter).toEqual(2);
    expect(result.current.healthScore).toEqual(veganRecipe.healthScore * 2);
    expect(result.current.menuPrice).toEqual(veganRecipe.price * 2);
    expect(result.current.readyInMinutes).toEqual(
      veganRecipe.readyInMinutes * 2
    );
  });
  test("Agregar maximo 2 recetas NO veganas y 4 recetas como maximo", () => {
    const { result } = renderHook(() => useMenu(), { wrapper });
    act(() => {
      result.current.addToMenu(recipeNoVegan);
      result.current.addToMenu(recipeNoVegan);
      result.current.addToMenu(recipeNoVegan);
    });
    expect(result.current.menu.dishs.length).toEqual(4);
    expect(result.current.menu.veganFoodCounter).toEqual(2);
    expect(result.current.healthScore).toEqual(veganRecipe.healthScore * 4);
    expect(result.current.menuPrice).toEqual(veganRecipe.price * 4);
    expect(result.current.readyInMinutes).toEqual(
      veganRecipe.readyInMinutes * 4
    );
  });
});
