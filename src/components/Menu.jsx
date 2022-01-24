import React from "react";
import PropTypes from "prop-types";
import DishCard from "./DishCard";
export default function Menu({ dishArr }) {
  return (
    <div className="bg-dark flex p-5 gap-5">
      {dishArr.map((dish, idx) => (
        <DishCard {...dish} key={idx} />
      ))}
    </div>
  );
}

Menu.propTypes = {
  dishArr: PropTypes.array,
};
