import useUser from "hooks/useUser";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
export default function Loged() {
  let { isLog } = useUser();
  const location = useLocation();

  if (isLog) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
