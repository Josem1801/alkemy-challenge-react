import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getRecipeById from "services/getRecipeById";
import DOMPurify from "dompurify";

export default function Dish() {
  const [dishInformation, setDishInformation] = useState(null);
  const { dishId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const dish = await getRecipeById(dishId);
      setDishInformation(dish);
    };
    fetchData();
  }, []);
  return (
    <section className="self-start container ">
      <div className="bg-black gap-5 grid grid-cols-1 sm:grid-cols-2 backdrop-blur-xl shadow-2xl shadow-dark rounded-xl p-6 m-5 text-white">
        <div className="h-fit  overflow-hidden grid place-items-center rounded-lg">
          <img
            className="object-cover min-w-[106%] min-h-[115%] "
            src={dishInformation?.image}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-row text-center">
          <h1 className="text-2xl font-bold col-span-2 ">
            {dishInformation.title}
          </h1>
        </div>
        <div
          className="sm:col-span-2 text:base sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(dishInformation?.summary),
          }}
        ></div>
      </div>
    </section>
  );
}
