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

router.get("/:id", async (req, res) => {
  try {
    const expense = await Expenses.findById(req.params.id);
    if (expense) {
      res.status(200).json(expenses);
    } else {
      res
        .status(404)
        .json({ message: "no expense found with an id of " + req.params.id });
    }
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
