exports.up = function(knex, Promise) {
  return knex.schema.createTable("userExpensePayments", tbl => {
    tbl.increments();

    tbl
      .integer("users_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("expense_id")
      .unsigned()
      .references("id")
      .inTable("expenses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.integer("amount_paid");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("userExpensePayments");
};
