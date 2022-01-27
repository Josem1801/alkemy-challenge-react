import React, { memo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getRecipeById from "services/getRecipeById";
import DOMPurify from "dompurify";
import Square from "components/Square";

function Dish() {
  const [dishInformation, setDishInformation] = useState(null);
  const navigate = useNavigate();
  const { dishId } = useParams();
  function carateristict(value) {
    return value ? (
      <i className="fas fa-check text-green-600"></i>
    ) : (
      <i className="fas fa-ban text-red-700"></i>
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      const dish = await getRecipeById(dishId);
      setDishInformation(dish);
    };
    fetchData();
  }, []);
  return (
    <section className="self-start container ">
      <div className="relative bg-black gap-5 grid grid-cols-1 grid-rows-[minmax(235px,1fr)_auto] sm:grid-cols-2 backdrop-blur-xl shadow-2xl shadow-dark rounded-xl p-6 m-5 text-white">
        {dishInformation && (
          <>
            <div
              className="absolute left-0 top-0 z-10"
              onClick={() => navigate(-1)}
            >
              <Square icon="fas fa-angle-left" active />
            </div>
            <div className="h-fit overflow-hidden grid place-items-center rounded-lg">
              <img
                className="object-cover min-w-[106%] min-h-[115%] "
                src={dishInformation.image}
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-[50px_auto_auto] grid-flow-row text-center gap-y-3">
              <h1 className="text-2xl font-bold col-span-2 ">
                {dishInformation.title}
              </h1>

              <div className="grid col-span-2 grid-cols-4 text-base grid-rows-[auto_auto] items-center justify-between  gap-y-1 text-[11px] text-center ">
                <span>Vegan</span>
                <span>Vegetarian</span>
                <span>Very Healthy</span>
                <span>Gluten free</span>
                {carateristict(dishInformation.isVegan)}
                {carateristict(dishInformation.isVegetarian)}
                {carateristict(dishInformation.isVeryHealthy)}
                {carateristict(dishInformation.glutenFree)}
              </div>
              <div className="grid col-span-2 grid-cols-3 grid-rows-[auto_auto] items-center text-base">
                <span className="font-bold">Price</span>
                <span className="font-bold">Health Score</span>
                <span className="font-bold">Ready In Minutes</span>
                <span>${dishInformation.pricePerServing}</span>
                <span>{dishInformation.healthScore}</span>
                <span>{dishInformation.readyInMinutes}</span>
              </div>
            </div>
            <div
              className="sm:col-span-2 text:base sm:text-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dishInformation?.summary),
              }}
            ></div>
          </>
        )}
      </div>
    </section>
  );
}
export default memo(Dish);
