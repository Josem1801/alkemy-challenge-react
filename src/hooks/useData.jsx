import { useState, useEffect } from "react";
import getRecipes from "services/getRecipes";

function useData() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  async function handleRecipes() {
    setLoading(true);
    try {
      const { results } = await getRecipes("pasta&addRecipeInformation=true");
      const recipesMaped = results.map(
        ({ image, id, pricePerServing, readyInMinutes, title }) => ({
          image,
          id,
          pricePerServing,
          readyInMinutes,
          title,
        })
      );
      console.log(recipes);
      setRecipes(recipesMaped);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleRecipes();
  }, []);
  return { recipes, loading };
}

export default useData;

useData.defaultProps = {
  number: 4,
};
