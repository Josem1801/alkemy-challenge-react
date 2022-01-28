import React, { useContext } from "react";
import TextField from "./TextField";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SearchContext } from "context/SearchContext";

export default function SearchInput() {
  const { setSearch } = useContext(SearchContext);
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    validationSchema: Yup.object({
      search: Yup.string().min(3, "Ingresa mas de 3 carácteres").default(""),
    }),
    initialValues: {
      search: "",
    },
    onSubmit: async ({ search }) => {
      setSearch(search);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex h-fit justify-between relative bg-white items-center rounded-lg "
      }
    >
      <TextField
        className="pr-8"
        placeholder="Buscar plato..."
        error={errors.search && touched.search}
        errorMessage={errors.search}
        {...getFieldProps("search")}
      />
      <i
        role="button"
        onClick={handleSubmit}
        className="fas fa-search absolute pr-2 right-0 text-dark"
      ></i>
    </form>
  );
}

SearchInput.propTypes = {
  handleSearch: PropTypes.func,
};
