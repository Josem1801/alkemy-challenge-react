import Menu from "components/Menu";
import React from "react";
import useData from "hooks/useData";
function Home() {
  const data = useData();
  console.log(data);
  return (
    <div className="container">
      <Menu dishArr={[{ name: "Sushi" }]} />
    </div>
  );
}
export default Home;
