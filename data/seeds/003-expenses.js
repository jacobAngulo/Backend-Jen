exports.seed = function(knex, Promise) {
  return knex("expenses")
    .truncate()
    .then(function() {
      return knex("expenses").insert([
        {
          expense_name: "Dinner in Italy",
          total_expense_price: 3000,
          primary_paid: 1,
          trip_id: 0
        },
        {
          expense_name: "Plane tickets to Italy",
          total_expense_price: 9500,
          primary_paid: 1,
          trip_id: 0
        },
        {
          expense_name: "Dinner in Spain",
          total_expense_price: 5000,
          primary_paid: 2,
          trip_id: 1
        },
        {
          expense_name: "Plane tickets to Spain",
          total_expense_price: 10000,
          primary_paid: 2,
          trip_id: 1
        },
        {
          expense_name: "Dinner in France",
          total_expense_price: 8000,
          primary_paid: 3,
          trip_id: 2
        },
        {
          expense_name: "Plane tickets to France",
          total_expense_price: 16000,
          primary_paid: 3,
          trip_id: 2
        }
      ]);
    });
};
