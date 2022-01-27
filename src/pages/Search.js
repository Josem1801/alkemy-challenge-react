import DishCard from "components/DishCard";
import SearchInput from "components/SearchInput";
import React, { useState } from "react";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [recipeStatus, setRecipeStatus] = useState("idle");
  function handleSearch(data, status) {
    setRecipes(data.results);
    setRecipeStatus(status);
  }
  const changePositionStyle =
    recipeStatus !== "idle"
      ? "flex-1 pb-[120px] overflow-hidden"
      : "h-0 overflow-auto";
  return (
    <div className="text-white container w-full h-full duration-1000  flex flex-col gap-y-8 pt-5 justify-center">
      <div className="w-[250px] self-center">
        <SearchInput handleSearch={handleSearch} />
      </div>
      <div
        className={`grid pt-[20px] px-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-8 duration-1000 ease-in-out transition-all ${changePositionStyle}`}
      >
        {recipes?.length > 0 &&
          recipes.map((recipe) => (
            <DishCard
              title={recipe.title}
              key={recipe.id}
              id={recipe.id}
              diets={recipe.diets}
              price={recipe.pricePerServing}
              readyInMinutes={recipe.readyInMinutes}
              healthScore={recipe.healthScore}
              image={recipe.image}
              isVegan={recipe.vegan}
              isVegetarian={recipe.vegetarian}
              isVeryHealthy={recipe.veryHealthy}
              href={`/plato/${recipe.id}`}
            />
          ))}
        <div className=" text-center">
          {recipeStatus === "notFound" &&
            "No se encontraron resultados en la busqueda"}
          {recipeStatus === "error" &&
            " Algo anda mal, no pudimos realizar la busqueda"}
        </div>
      </div>
    </div>
  );
}
