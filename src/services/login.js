import axios from "axios";

/**
 *
 * @param {Object} user - Cuenta del usuario
 * @param {string} user.email - Email del usuario
 * @param {string} user.password - Contraseña del usuario
 * @returns
 */

export default async function login({ email, password }) {
  try {
    const res = await axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}
