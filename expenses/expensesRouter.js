const router = require("express").Router();
const Expenses = require("./expensesModel");

router.get("/", async (req, res) => {
  try {
    const expenses = await Expenses.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// add new expense
router.post("/", async (req, res) => {
  try {
    const expense = await Expenses.add(req.body);
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
