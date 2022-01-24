import DishCard from "components/DishCard";
import SearchInput from "components/SearchInput";
import React, { useState } from "react";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  function handleSearch({ results }) {
    console.log(results);
    setRecipes(results);
  }
  const changePositionStyle =
    recipes.length > 0 ? "flex-1 overflow-auto" : "h-0 overflow-hidden";
  return (
    <div
      className={
        "text-white w-full h-full duration-1000  flex flex-col gap-y-8 overflow-hidden  pt-5"
      }
    >
      <SearchInput handleSearch={handleSearch} />
      <div
        className={`grid pb-[120px] grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center gap-5 duration-1000 ease-in-out transition-all ${changePositionStyle}`}
      >
        {recipes.map(({ title, id, image }) => (
          <DishCard name={title} key={id} image={image} href={`/plato/${id}`} />
        ))}
      </div>
    </div>
  );
}
