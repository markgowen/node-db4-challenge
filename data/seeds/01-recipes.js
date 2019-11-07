exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, recipe_name: 'BBQ Chicken' },
        { recipe_id: 2, recipe_name: 'Simple Salmon' }
      ]);
    });
};
