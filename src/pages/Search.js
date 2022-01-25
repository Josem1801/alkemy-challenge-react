import DishCard from "components/DishCard";
import SearchInput from "components/SearchInput";
import React, { useState } from "react";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [recipeStatus, setRecipeStatus] = useState("idle");
  function handleSearch(results, status) {
    console.log(status);
    setRecipes(results);
    setRecipeStatus(status);
  }
  const changePositionStyle =
    recipeStatus !== "idle" ? "flex-1 overflow-auto" : "h-0 overflow-hidden";
  return (
    <div className="text-white w-full h-full duration-1000  flex flex-col gap-y-8 overflow-hidden pt-5">
      <SearchInput handleSearch={handleSearch} />
      <div
        className={`grid pb-[120px] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center gap-5 duration-1000 ease-in-out transition-all ${changePositionStyle}`}
      >
        {recipes?.length > 0 &&
          recipes.map(({ title, id, image }) => (
            <DishCard
              name={title}
              key={id}
              image={image}
              href={`/plato/${id}`}
            />
          ))}
        {recipeStatus === "notFound" && (
          <div className=" text-center">
            No se encontraron resultados en la busqueda
          </div>
        )}
        {recipeStatus === "error" && (
          <div className=" text-center">
            Algo anda mal, no pudimos realizar la busqueda
          </div>
        )}
      </div>
    </div>
  );
}
