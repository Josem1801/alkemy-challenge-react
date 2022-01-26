import React from "react";
import TextField from "./TextField";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import getRecipes from "services/getRecipes";

export default function SearchInput({ handleSearch }) {
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    validationSchema: Yup.object({
      search: Yup.string().min(3, "Ingresa mas de 3 carácteres").default(""),
    }),
    initialValues: {
      search: "",
    },
    onSubmit: async ({ search }) => {
      const joinWords = search.replace(/\s/g, "+");
      let status, results;
      try {
        results = await getRecipes(10, joinWords);
        status = results instanceof Error ? "error" : "success";
        console.log();
        if (results?.results.length === 0) {
          status = "notFound";
        }
      } catch (e) {
        results = { results: [] };
        status = "error";
        console.log(`Ocurrio un error: ${e}`);
      } finally {
        handleSearch(results, status);
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex h-fit justify-between relative bg-white items-center rounded-lg max-w-lg m-auto"
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
