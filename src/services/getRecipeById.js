import { requester } from "./requester";

/**
 * Obtener una receta por id
 * @param {number|string} id Id de la receta
 * @returns Objeto con la informacion de la receta
 */

export default async function getRecipeById(id) {
  try {
    const { data } = await requester.get(
      `recipes/${id}/information?includeNutrition=false`
    );
    return data;
  } catch (err) {
    return err;
  }
}
