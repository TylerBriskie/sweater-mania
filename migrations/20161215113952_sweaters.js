
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sweaters',function(table){
    table.increments();
    table.text('material');
    table.text('style');
    table.text('color').notNullable();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sweaters');
};
