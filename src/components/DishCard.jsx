import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useMenu } from "hooks/useMenu";

export default function DishCard(props) {
  const { id, title, image, href, isVegan, isVegetarian, isVeryHealthy } =
    props;
  const { menu, addToMenu, removeFromMenu } = useMenu();

  function carateristict(value) {
    return value ? (
      <i className="fas fa-check text-green-600"></i>
    ) : (
      <i className="fas fa-ban text-red-700"></i>
    );
  }
  return (
    <div
      to={href}
      className="rounded-md relative grid grid-cols-[120px_1fr] grid-rows-[auto_auto_30px] h-[120px] pt-2  hover:bg-opacity-0  shadow-[2px_3px_10px_0_rgba(0,0,0,4)] ease-in-out duration-500   w-[320px] text-center bg-dark font-semibold overflow-hidden"
    >
      <Link to={href} className="absolute left-0 top-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="h-[120%] w-[120px] translate-y-[-12px] object-cover"
        />
      </Link>
      <span
        title={title}
        className="cursor-pointer text-sm col-start-2 font-semibold px-2 truncate z-10 "
      >
        {title}
      </span>

      <div className="grid grid-cols-[auto_auto_auto]  justify-between grid-rows-[18px_15px] gap-y-1 text-[11px] text-center col-start-2 row-start-2 px-3 ">
        <span>Vegan</span>
        <span>Vegetarian</span>
        <span>Very Healthy</span>
        {carateristict(isVegan)}
        {carateristict(isVegetarian)}
        {carateristict(isVeryHealthy)}
      </div>

      {menu.dishs.some((recipe) => recipe.id === id) ? (
        <Button
          onClick={() => removeFromMenu(id, isVegan)}
          className="w-full col-start-2 row-start-3 justify-self-end"
          background="bg-[#000000]"
        >
          Eliminar
        </Button>
      ) : (
        <Button
          onClick={() => addToMenu(props)}
          className="w-full col-start-2  row-start-3 justify-self-end "
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
  isVegetarian: PropTypes.bool,
  isVeryHealthy: PropTypes.bool,
};
