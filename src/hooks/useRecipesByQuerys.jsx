import { useState, useEffect } from "react";
import getRecipes from "services/getRecipes";

function useRecipesByQuerys(pagination = 0) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [query, setQuery] = useState("");
  function joinWords(word) {
    return word.replace(/\s/g, "+");
  }

  async function handleRecipes(pag) {
    setLoading(true);
    try {
      const results = await getRecipes(joinWords(query), 6 + pag);
      if (results instanceof Error) {
        setStatus("error");
        return;
      }
      if (results?.results.length === 0) {
        setStatus("notFound");
        return;
      }
      if (recipes.length > 0) {
        const paginationResults = results.results.slice(recipes.length);
        setRecipes([...recipes, ...paginationResults]);
        setStatus("success");
        return;
      }
      setRecipes(results.results);
      setStatus("success");
    } catch (e) {
      setStatus("error");
      console.log(`Ocurrio un error: ${e}`);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (query) handleRecipes(pagination);
  }, [query, pagination]);

  return { recipes, loading, status, setQuery };
}

export default useRecipesByQuerys;

useRecipesByQuerys.defaultProps = {
  number: 4,
};
