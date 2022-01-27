import DishCard from "components/DishCard";
import { useMenu } from "context/MenuContext";
import React from "react";

function Home() {
  const { menu } = useMenu();

  return (
    <div className="container h-full pt-5 flex flex-col gap-y-5 text-white">
      <h1 className=" text-5xl font-bold">Menu</h1>
      {menu.dishs.length < 1 && (
        <p>
          Aún no hay platos en el menu, puedes agregarlos llengo al buscado que
          esta debajo :)
        </p>
      )}
      <div className=" w-full  transition-[flex-wrap] duration-500 ease-in-out flex gap-6 flex-wrap justify-center pb-[100px]">
        {menu.dishs.map((recipe) => (
          <DishCard
            title={recipe.title}
            key={recipe.id}
            id={recipe.id}
            diets={recipe.diets}
            price={recipe.pricePerServing}
            readyInMinutes={recipe.readyInMinutes}
            healthScore={recipe.healthScore}
            image={recipe.image}
            isVegan={recipe.isVegan}
            href={`/plato/${recipe.id}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
