exports.seed = function(knex) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients').insert([
        { ingredient_id: 1, ingredient_name: 'chicken' },
        { ingredient_id: 2, ingredient_name: 'salmon' },
        { ingredient_id: 3, ingredient_name: 'garlic' },
        { ingredient_id: 4, ingredient_name: 'butter' },
        { ingredient_id: 5, ingredient_name: 'brown sugar' },
        { ingredient_id: 6, ingredient_name: 'oregano' },
        { ingredient_id: 7, ingredient_name: 'thyme' },
        { ingredient_id: 8, ingredient_name: 'rosemary' },
        { ingredient_id: 8, ingredient_name: 'lemon' },
        { ingredient_id: 9, ingredient_name: 'bbq sauce' },
        { ingredient_id: 10, ingredient_name: 'lemon' }
      ]);
    });
};
