const router = require("express").Router();
const Trips = require("./tripsModel");

const db = require("../data/dbConfig");

// retrieve full list of trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trips.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json(error);
  }
});

// retrieve specific trip by id #
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trips.findById(req.params.id);

    if (trip) {
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: "Trip not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json(error);
  }
});

// remove trip from list
router.delete("/:id", async (req, res) => {
  try {
    const count = await Trips.remove(req.params.id);
    if (count > 0) {
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

// update an existing trip
router.put("/:id", async (req, res) => {
  try {
    const trip = await Trips.update(req.params.id, req.body);
    if (trip) {
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: "Uh-oh! Trip could not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// add a new trip
router.post("/", async (req, res) => {
  try {
    const trip = await Trips.add(req.body);
    res.status(200).json(trip);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// bring in array of participants on trips

module.exports = router;
