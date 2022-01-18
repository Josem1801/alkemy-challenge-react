
const {REACT_APP_API_KEY} = process.env;

export default function url() {
  console.log(REACT_APP_API_KEY);
  const baseUrl = "https://api.spoonacular.com/recipes";
  return `${baseUrl}/complexSearch?apiKey=${REACT_APP_API_KEY}&includeNutrition=true`;
}
