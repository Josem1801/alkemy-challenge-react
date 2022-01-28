import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Square({ icon, text, active, onClick, to }) {
  const buttonActive = active ? "bg-primary shadow-shadow" : "";
  const Tag = to ? Link : "button";
  return (
    <Tag
      to={to}
      role="button"
      onClick={onClick}
      className={`${buttonActive} text-white w-10 h-10 shadow-lg grid overflow-hidden hover:overflow-visible transition duration-500 place-items-center rounded-md  color-white relative group `}
    >
      <i className={icon}></i>
      <span className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-50px] min-w-[50px] bg-dark py-1 px-3 rounded-md  place-items-center  ">
        {text}
      </span>
    </Tag>
  );
}

Square.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  active: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
