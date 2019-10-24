const db = require("../data/dbConfig");

module.exports = {
  findBy,
  findBy,
  add,
  update,
  remove
};

function findBy(filter) {
  return db("userExpensePayments")
    .where(filter)
    .join("users", "userExpensePayments.user_id", "users.id");
}

function findById(id) {
  return db("userExpensePayments")
    .where({ id })
    .first();
}

async function add(payment) {
  const [id] = await db("userExpensePayments").insert(payment);

  return findById(id);
}

function update(id, changes) {
  return db("userExpensePayments")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

async function remove(id) {
  return await db("userExpensePayments")
    .where({ id })
    .del();
}
