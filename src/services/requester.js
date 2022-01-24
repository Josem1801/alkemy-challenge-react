import axios from "axios";
const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const requester = axios.create({
  baseURL: REACT_APP_BASE_URL,
  params: {
    apiKey: `${REACT_APP_API_KEY}`,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
