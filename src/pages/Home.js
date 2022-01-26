import DishCard from "components/DishCard";
import { useMenu } from "context/MenuContext";
import React from "react";

function Home() {
  const { menu } = useMenu();
  console.log(menu);
  return (
    <div className="container">
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
          isVegan={recipe.vegan}
          href={`/plato/${recipe.id}`}
        />
      ))}
    </div>
  );
}
export default Home;
