const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainerRef = document.querySelector('#ingredients');

const makeIngredientEl = (name, className) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = name;
  ingredientEl.classList.add(className);

  return ingredientEl;
}

const ingredientElements = ingredients.map(value => makeIngredientEl(value, 'item'));
ingredientsContainerRef.append(...ingredientElements);