import React from "react";
import PropTypes from "prop-types";
export default function Button({ children, props }) {
  return (
    <button {...props} className="rounded-sm bg-primary text-white py-2">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
};
