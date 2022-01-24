import useUser from "hooks/useUser";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Square from "./Square";

export default function Layout() {
  const { pathname } = useLocation();
  const { isLog, logout } = useUser();
  const sections = [
    { name: "Home", icon: "fas fa-home", path: "/" },
    { name: "Buscar", icon: "fas fa-search", path: "/buscar" },
    {
      name: isLog ? "Salir" : "Login",
      icon: isLog ? "fas fa-sign-out-alt" : "far fa-user",
      path: isLog ? "" : "/login",
    },
  ];
  return (
    <div className="m-auto bg-black min-h-screen min-w-full relative grid place-items-center">
      <nav className="fixed bottom-10 bg-dark flex gap-5 p-3 rounded-md">
        {sections.map(({ name, icon, path }) => (
          <Square
            icon={icon}
            text={name}
            key={name}
            to={path}
            active={path === pathname}
            onClick={() => {
              isLog && logout();
            }}
          />
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
