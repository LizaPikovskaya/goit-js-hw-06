const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientListEl = document.querySelector("#ingredients");
const createIngredientItem = (ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  return ingredientItemEl;
};

const ingredientItemsEl = ingredients.map(createIngredientItem);
ingredientListEl.append(...ingredientItemsEl);
