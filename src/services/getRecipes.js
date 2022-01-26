import { requester } from "./requester";

/**
 * @param {number} amount Cantidad de recetas a recibir
 * @param {string} [querys] querys para obtener recetas filtradas
 * @returns Array de recetas
 */

export default async function getRecipes(amount, querys) {
  try {
    const { data } = await requester.get(
      `recipes/complexSearch?query=${querys}&addRecipeInformation=true&number=${amount}`
    );
    return data;
  } catch (err) {
    return err;
  }
}
