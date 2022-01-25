import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import getRecipeById from "services/getRecipeById";
// import DOMPurify from "dompurify";

export default function Dish() {
  const [dishInformation, setDishInformation] = useState(null);
  // const { dishId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // const dish = await getRecipeById(dishId);
      setDishInformation("hola");
    };
    fetchData();
  }, []);
  return (
    <section className="self-start container ">
      <div className="bg-[0,0,0,0.3] gap-5 grid grid-cols-1 sm:grid-cols-2 backdrop-blur-xl shadow-2xl shadow- rounded-xl p-6 m-5 text-white">
        <div className="h-fit  overflow-hidden grid place-items-center rounded-lg">
          {console.log(dishInformation)}
          <img
            className="object-cover min-w-[120%] min-h-[110%] "
            src="https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg"
            alt={""}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-row text-center">
          <h1 className="text-2xl font-bold col-span-2 ">
            Inverting an elements backdrop
          </h1>
        </div>
        <div
          className="sm:col-span-2 text:base sm:text-lg"
          // dangerouslySetInnerHTML={{
          //   __html: DOMPurify.sanitize(dishInformation.summary),
          // }}
        >
          Ligado históricamente a pizzas, hamburguesas, pollo frito… una de las
          características más importantes es que su consumo, de forma habitual,
          se puede realizar en el propio local, recogida en el establecimiento
          -coche- o entrega domiciliaria.
        </div>
      </div>
    </section>
  );
}
