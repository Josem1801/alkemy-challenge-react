import DishCard from "components/DishCard";
import { useMenu } from "context/MenuContext";
import React from "react";
function acumulate(dishs, tag) {
  return dishs.map((recipe) => recipe[tag]).reduce((a, b) => a + b);
}
function Home() {
  const { menu } = useMenu();

  // menu.dishs.reduce((prev, act) => console.log(prev, act));

  return (
    <div className="container h-full pt-5 flex flex-col gap-y-5 text-white">
      <h1 className=" text-5xl font-bold">Menu</h1>
      {menu.dishs.length < 1 ? (
        <p>
          Aún no hay platos en el menu, puedes agregarlos llengo al buscado que
          esta debajo :)
        </p>
      ) : (
        <div className="grid grid-cols-3 grid-rows-2 text-center">
          <span className="font-semibold text-base">Precio total</span>
          <span className="font-semibold text-base">Puntos de salud</span>
          <span className="font-semibold text-base">Tiempo de preparación</span>
          <span className="font-semibold text-sm underline">
            ${acumulate(menu.dishs, "price")}
          </span>
          <span className="font-semibold text-sm underline">
            {acumulate(menu.dishs, "healthScore")}
          </span>
          <span className="font-semibold text-sm underline">
            {acumulate(menu.dishs, "readyInMinutes")} Minutos
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
export default Home;
