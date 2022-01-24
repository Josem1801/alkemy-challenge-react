import Button from "components/Button";
import TextField from "components/TextField";
import useUser from "hooks/useUser";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { memo } from "react/cjs/react.development";
function Login() {
  const location = useLocation();
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleLoginUser, loading, isLog } = useUser();
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo no es valido")
        .required("El email es requerido"),
      password: Yup.string("La contraseña es requerida"),
    }),
    validateOnChange: false,
    initialValues,
    onSubmit: async function handleLogin({ email, password }) {
      handleLoginUser({ email, password });
    },
  });

  if (isLog) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    <div className="h-100 w-full  grid gap-6">
      <h1 className="text-center text-2xl font-semibold text-white">
        Inicia sesion
      </h1>
      <form
        className="grid gap-5 w-[30%] min-w-[200px] m-auto  "
        onSubmit={handleSubmit}
      >
        <TextField
          error={errors.email && touched.email}
          type="email"
          placeholder="Correo electronico"
          errorMessage={errors.email}
          {...getFieldProps("email")}
        />
        <TextField
          error={errors.password && touched.password}
          type="password"
          placeholder="Contraseña"
          errorMessage={errors.password}
          {...getFieldProps("password")}
        />
        <Button disabled={loading}>Iniciar sesión</Button>
      </form>
    </div>
  );
}

export default memo(Login);
