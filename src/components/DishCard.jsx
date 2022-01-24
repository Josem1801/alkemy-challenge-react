import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function DishCard({ name, image, href }) {
  return (
    <Link
      role="button"
      to={href}
      className="rounded-xl w-40 h-52 bg-dark grid justify-items-center mt-12 group text-sm text-center"
    >
      <span className="w-24 h-24 bg-white translate-y-[-40px] grid place-items-center overflow-hidden group-hover:rounded-xl ease rounded-[100%] duration-[400ms] transition-all ">
        <img src={image} alt={name} className="object-cover h-full" />
      </span>
      {name}
    </Link>
  );
}

DishCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
};
