import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRecipeById from "services/getRecipeById";
export default function Dish() {
  const [dishInformation, setDishInformation] = useState();
  const { dishId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const dish = await getRecipeById(dishId);
      setDishInformation(dish);
    };
    fetchData();
  }, []);
  return <div></div>;
}
