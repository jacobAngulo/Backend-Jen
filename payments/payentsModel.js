const db = require("../data/dbConfig");

module.exports = {
  getByExpenseId
};

function getByExpenseId(id) {
  return db("userExpensePayments").where({ expense: id });
}
