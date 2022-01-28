import { requester } from "./requester";

/**
 * Obtener una lista de recetas
 * @param {string} querys querys para obtener recetas filtradas
 * @param {number} amount Cantidad de recetas a recibir
 * @returns Array de recetas
 */

export default async function getRecipes(querys, amount) {
  try {
    const { data } = await requester.get(
      `recipes/complexSearch?query=${querys}&addRecipeInformation=true&number=${amount}`
    );
    return data;
  } catch (err) {
    return err;
  }
}
