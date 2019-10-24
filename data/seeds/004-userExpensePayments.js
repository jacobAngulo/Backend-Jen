exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("userExpensePayments")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("userExpensePayments").insert([
        {
          users_id: 0,
          expense_id: 0,
          amount_paid: 15
        },
        {
          users_id: 1,
          expense_id: 4,
          amount_paid: 15
        },
        {
          users_id: 1,
          expense_id: 1,
          amount_paid: 15
        },
        {
          users_id: 0,
          expense_id: 2,
          amount_paid: 15
        },
        {
          users_id: 2,
          expense_id: 3,
          amount_paid: 15
        },
        {
          users_id: 2,
          expense_id: 5,
          amount_paid: 15
        }
      ]);
    });
};
