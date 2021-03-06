import Button from "components/Button";
import DishCard from "components/DishCard";
import SearchInput from "components/SearchInput";
import useRecipesByQuerys from "hooks/useRecipesByQuerys";
import React, { memo, useState } from "react";

function Search() {
  const [pagination, setPagination] = useState(0);
  const { recipes, setQuery, status, loading } = useRecipesByQuerys(pagination);
  function handleSearch(query) {
    setPagination(0);
    setQuery(query);
  }
  console.log(status !== "idle");
  const animationRecipes = status !== "idle" ? "flex-1 overflow-hidden" : "h-0";
  return (
    <div className="text-white container pb-[120px] w-full h-full duration-1000 flex flex-col gap-y-8 pt-5 justify-center">
      <div className="w-[250px] self-center">
        <SearchInput handleSearch={handleSearch} />
      </div>
      <div
        className={`grid pt-[20px] px-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-8 duration-1000 ease-in-out transition-all ${animationRecipes} `}
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
          {status === "notFound" &&
            "No se encontraron resultados en la busqueda"}
          {status === "error" &&
            " Algo anda mal, no pudimos realizar la busqueda"}
        </div>
      </div>
      <div className="w-[150px] self-center">
        {status === "lastRecipes" ||
          (recipes.length > 0 && (
            <Button
              className="col-span-2 px-3"
              background={loading ? "bg-opacity-40" : "bg-primary"}
              disabled={loading}
              onClick={() => setPagination((prev) => prev + 6)}
            >
              Mostra m??s
            </Button>
          ))}
      </div>
    </div>
  );
}

export default memo(Search);
