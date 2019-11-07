exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable();
      tbl
        .integer('ingredient')
        .notNullable()
        .unsigned()
        .references('ingredient_name')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.float('ingredient_qty', 64).notNullable();
      tbl
        .integer('step_instructions', 255)
        .unsigned()
        .references('steps')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('ingredient', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
