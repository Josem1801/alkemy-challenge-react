import { UserContext } from "context/UserContext";
import { useCallback, useContext, useState } from "react";
import login from "services/login";
import Swal from "sweetalert2";

export default function useUser() {
  const { jwt, setJwt } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const handleLoginUser = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      const { token } = await login({ email, password });
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error al iniciar sesion, intentalo mas tarde",
        });
        return;
      }
      setJwt(token);
      window.localStorage.setItem("jwt", token);
      Swal.fire({
        icon: "success",
        title: "Yeah!.",
        text: "Email and password is success",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is wrong",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  const logout = useCallback(() => {
    setJwt(null);
    window.localStorage.removeItem("jwt");
  }, []);
  return { handleLoginUser, isLog: Boolean(jwt), loading, logout };
}
