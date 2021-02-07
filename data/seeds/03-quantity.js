exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('quantity').insert([
        { recipe_id: 1, ingredient_id: 10, quantity: '3/4 cup' },
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: '6 boneless skinless breasts'
        },
        { recipe_id: 2, ingredient_id: 2, quantity: '4 filets' },
        { recipe_id: 2, ingredient_id: 3, quantity: '4 cloves' },
        { recipe_id: 2, ingredient_id: 4, quantity: '6 tablespoons' },
        { recipe_id: 2, ingredient_id: 5, quantity: '1 tablespoon' },
        { recipe_id: 2, ingredient_id: 6, quantity: '1/2 teaspoon' },
        { recipe_id: 2, ingredient_id: 7, quantity: '1/2 teaspoon' },
        { recipe_id: 2, ingredient_id: 8, quantity: '1/2 teaspoon' },
        { recipe_id: 2, ingredient_id: 9, quantity: '1 slice' }
      ]);
    });
};
