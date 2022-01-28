import axios from "axios";
const { REACT_APP_LOGIN_URL } = process.env;
/**
 *
 * @param {Object} user - Cuenta del usuario
 * @param {string} user.email - Email del usuario
 * @param {string} user.password - Contraseña del usuario
 * @returns A token
 */

export default async function login({ email, password }) {
  try {
    const res = await axios.post(`${REACT_APP_LOGIN_URL}`, {
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}
