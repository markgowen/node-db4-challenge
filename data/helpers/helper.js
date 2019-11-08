const db = require('../dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

const getRecipes = () => {
  return db('recipes');
};

const getShoppingList = recipe_id => {
  return db
    .select('ingredient_name', 'quantity')
    .from('quantity')
    .join('ingredients')
    .where({ recipe_id });
};

const getInstructions = recipe_id => {
  return db
    .select('recipe_name', 'step_number', 'instructions')
    .from('steps')
    .join('recipes', 'steps.recipe_id', 'recipe_id')
    .where({ recipe_id });
};
