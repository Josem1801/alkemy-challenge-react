import { useState, useEffect } from "react";
import getRecipes from "services/getRecipes";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  async function handleRecipes() {
    setLoading(true);
    try {
      const { results } = await getRecipes();
      const recipesMaped = results.map(
        ({ image, id, pricePerServing, readyInMinutes, title }) => ({
          image,
          id,
          pricePerServing,
          readyInMinutes,
          title,
        })
      );
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

export default useRecipes;

useRecipes.defaultProps = {
  number: 4,
};
