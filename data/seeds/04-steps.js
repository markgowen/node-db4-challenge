exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: 'Heat oven to 375 degrees F.'
        },
        {
          recipe_id: 1,
          step_number: 2,
          instructions:
            'Pour bbq sauce over chicken in 13x9-inch baking dish sprayed with cooking spray.'
        },
        {
          recipe_id: 1,
          step_number: 3,
          instructions: 'Bake 25 min or until chicken is done.'
        },
        { recipe_id: 2, step_number: 1, instructions: 'Preheat oven to 400F.' },
        {
          recipe_id: 2,
          step_number: 2,
          instructions: 'Grease a sheet pan with cooking spray.'
        },
        {
          recipe_id: 2,
          step_number: 3,
          instructions:
            'Arrange broccoli florets and salmon fillets on prepared sheet pan.'
        },
        {
          recipe_id: 2,
          step_number: 4,
          instructions: 'Rub minced garlic over each fillet. Set aside.'
        },
        {
          recipe_id: 2,
          step_number: 5,
          instructions:
            'In a mixing bowl whisk together melted butter, brown sugar, oregano, thyme, and rosemary.'
        },
        {
          recipe_id: 2,
          step_number: 6,
          instructions: 'Pour the butter mixture over the salmon.'
        },
        {
          recipe_id: 2,
          step_number: 7,
          instructions:
            'Take half of a lemon and squeeze lemon juice over everything; then, season with salt and pepper.'
        },
        {
          recipe_id: 2,
          step_number: 8,
          instructions:
            'Place the sheet pan in the oven and cook for 15 minutes, or until the fish flakes easily with a fork and internal temperature is 145F degrees.'
        },
        {
          recipe_id: 2,
          step_number: 9,
          instructions: 'Remove from oven and garnish.'
        },
        {
          recipe_id: 2,
          step_number: 10,
          instructions: 'Serve with lemon slices.'
        }
      ]);
    });
};
