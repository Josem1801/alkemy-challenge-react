import axios from "axios";

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
