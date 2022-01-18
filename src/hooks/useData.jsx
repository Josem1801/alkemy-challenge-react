import axios from "axios";
import { useState, useEffect } from "react";
import url from "data/url";
function useData() {
  const [data, setData] = useState();
  async function getData() {
    const currentData = await axios.get(url());
    setData(currentData);
  }
  useEffect(() => {
    getData();
  }, []);
  return { data };
}

export default useData;
