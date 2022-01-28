import { useState, useEffect } from "react";
import getRecipes from "services/getRecipes";

/**
 * Obten una lista de recetas
 * @param {number} [pagination = 0]
 * @returns
 */
function useRecipesByQuerys(pagination) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [query, setQuery] = useState("");
  function joinWords(word) {
    return word.replace(/\s/g, "+");
  }
  //Ya qu el api no cuenta con un query para
  //hacer una peticion a partir de cierto numero,
  //entre mas se oprima "Mostrar mas", incrementara
  //el tamaño de la petición
  async function handleRecipes(pag) {
    setLoading(true);
    try {
      const results = await getRecipes(joinWords(query), 6 + pag);
      console.log(results);
      if (results instanceof Error) {
        setStatus("error");
        setRecipes([]);
        return;
      }
      if (results.totalResults === 0) {
        setStatus("notFound");
        setRecipes([]);
        return;
      }
      if (pag > 0 && results.number >= results.totalResults) {
        setStatus("lastRecipes");
        return results.results;
      }
      if (results.number >= results.totalResults) {
        setStatus("lastRecipes");
        setRecipes(results.results);
        return;
      }
      if (pag > 0) {
        return results.results;
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
  }, [query]);

  async function handlePagination(pagination) {
    const results = await handleRecipes(pagination);
    const paginationResults = results.slice(recipes.length);
    setRecipes([...recipes, ...paginationResults]);
  }
  useEffect(() => {
    if (pagination) handlePagination(pagination);
  }, [pagination]);

  return { recipes, loading, status, setQuery };
}

export default useRecipesByQuerys;

useRecipesByQuerys.defaultProps = {
  number: 4,
};
