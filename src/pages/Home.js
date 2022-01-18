import useData from "hooks/useData";
import React from "react";

function Home() {
  const { data } = useData();
  console.log(data);
  return <div></div>;
}

export default Home;
