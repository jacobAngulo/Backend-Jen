exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();

    // Format for date: dd/mm/yyyy
    tbl.date("date").notNullable();

    tbl.integer("base_cost");

    tbl.boolean("complete");

    tbl.string("img", 128);

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trips");
};
