import React from "react";
import PropTypes from "prop-types";
export default function Button({ children, className, background, ...props }) {
  const bg = background ? background : "bg-primary";
  return (
    <button
      {...props}
      className={`rounded-sm flex items-center justify-center ${bg} hover:bg-opacity-75 z-10 transition text-white py-2 ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
  className: PropTypes.string,
  background: PropTypes.string,
};
