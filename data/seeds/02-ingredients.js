exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'chicken' },
        { id: 2, ingredient_name: 'salmon' },
        { id: 3, ingredient_name: 'garlic' },
        { id: 4, ingredient_name: 'butter' },
        { id: 5, ingredient_name: 'brown sugar' },
        { id: 6, ingredient_name: 'oregano' },
        { id: 7, ingredient_name: 'thyme' },
        { id: 8, ingredient_name: 'rosemary' },
        { id: 9, ingredient_name: 'lemon' },
        { id: 10, ingredient_name: 'bbq sauce' }
      ]);
    });
};
