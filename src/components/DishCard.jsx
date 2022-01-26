import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useMenu } from "context/MenuContext";

export default function DishCard({
  id,
  title,
  image,
  href,
  ...informationDish
}) {
  const { menu, addToMenu, removeFromMenu } = useMenu();
  return (
    <div
      to={href}
      className="rounded-xl relative grid grid-cols-[120px_1fr] grid-rows-[auto_30px] h-[120px] pt-2  hover:shadow-[rgba(255,255,255,0.1)] border border-transparent shadow-[5px_5px_15px_0_rgba(0,0,0,0.5)] ease-in-out duration-500   w-[320px] text-center bg-dark   gap-x-3 gap-y-1   font-semibold overflow-hidden"
    >
      <Link to={href} className="absolute left-0 top-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="h-[120%] w-[120px] translate-y-[-12px] object-cover"
        />
      </Link>
      <span className="text-sm col-start-2">{title}</span>
      {menu.dishs.some((recipe) => recipe.id === id) ? (
        <Button
          onClick={() => removeFromMenu(id)}
          className="w-1/2 col-start-2 row-start-2 justify-self-end"
          background="bg-black"
        >
          Eliminar
        </Button>
      ) : (
        <Button
          onClick={() => addToMenu({ id, name, image, ...informationDish })}
          className="w-1/2 col-start-2 row-start-2 justify-self-end "
        >
          Agregar
        </Button>
      )}
    </div>
  );
}

DishCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  diets: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  readyInMinutes: PropTypes.number,
  healthScore: PropTypes.number,
  isVegan: PropTypes.bool,
};
