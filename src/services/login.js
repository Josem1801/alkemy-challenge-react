import axios from "axios";

export default async function login({email,password}) {
  const res = await axios.post("http://challenge-react.alkemy.org/", {email, password});
  return res.data;
}
