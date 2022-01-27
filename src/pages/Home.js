import DishCard from "components/DishCard";
import { useMenu } from "hooks/useMenu";
import React, { memo } from "react";

function Home() {
  const { menu, healthScore, menuPrice, readyInMinutes } = useMenu();

  return (
    <div className="container h-full pt-5 flex flex-col gap-y-5 text-white">
      <h1 className="text-primary text-5xl font-bold">Menu</h1>
      {menu.dishs.length < 1 ? (
        <p>
          Aún no hay platos en el menu, puedes agregarlos llengo al buscado que
          esta debajo :)
        </p>
      ) : (
        <div className="grid grid-cols-3 grid-rows-[auto_25px] text-center gap-y-1 ">
          {["Precio total", "Puntos de salud", "Tiempo de preparación"].map(
            (name, idx) => (
              <span
                className="font-semibold text-sm sm:text-base grid items-center gap-y-1 h-full"
                key={idx}
              >
                {name} <i className="fas fa-angle-double-down self-end"></i>
              </span>
            )
          )}

          <span className="font-semibold text-sm underline">${menuPrice}</span>
          <span className="font-semibold text-sm underline">{healthScore}</span>
          <span className="font-semibold text-sm underline">
            {readyInMinutes} Minutos
          </span>
        </div>
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
export default memo(Home);
