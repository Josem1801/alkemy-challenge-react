import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextField({
  type,
  placeholder,
  error,
  errorMessage,
  className,
  ...props
}) {
  const textError = error
    ? "border-red-800 border-[3px]"
    : "border-light border-transparent border-[3px]";
  const [show, setShow] = useState(false);
  return (
    <label className="text-gray-700 flex box-content flex-col justify-center  relative text-sm font-bold  transition-all">
      <input
        {...props}
        type={show ? "text" : type}
        placeholder={placeholder}
        className={`${className} appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${textError}`}
      />
      {type === "password" && (
        <span
          role="button"
          className="absolute right-0 pr-3"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Ocultar" : "Mostrar"}
        </span>
      )}
      {error && (
        <p className="text-red-800 absolute bottom-[-16px] font-normal text-xs">
          {errorMessage}
        </p>
      )}
    </label>
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
  error: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};
