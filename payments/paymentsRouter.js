const router = require("express").Router();
const Payments = require("./paymentsModel");

router.get("/expense/:id", async (req, res) => {
  try {
    const expensePayments = await Payments.findBy({
      expense_id: req.params.id
    });
    res.status(200).json(expensePayments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const payment = await Payments.findBy({ id: req.params.id });

    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: "Trip not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Payments.remove(req.params.id);
    if (deleted) {
      res
        .status(200)
        .json({ message: "The trip has been removed from the list." });
    } else {
      res.status(404).json({ message: "Uh-oh! Trip could not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPayment = await Payments.update(req.params.id, req.body);
    if (updatedPayment) {
      res.status(200).json(updatedPayment);
    } else {
      res.status(404).json({ message: "Uh-oh! Trip could not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPayment = await Payments.add(req.body);
    res.status(200).json(newPayment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
