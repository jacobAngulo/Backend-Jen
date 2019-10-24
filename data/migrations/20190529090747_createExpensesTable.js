exports.up = function(knex, Promise) {
  return knex.schema.createTable("expenses", tbl => {
    tbl.increments();

    tbl.string("expense_name", 128).notNullable();

    tbl.integer("total_expense_price");

    // person creating expense
    tbl
      .integer("primary_paid")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // bring in array of people who paid for the trip

    tbl
      .integer("trip_id")
      .unsigned()
      .references("id")
      .inTable("trips")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expenses");
};
