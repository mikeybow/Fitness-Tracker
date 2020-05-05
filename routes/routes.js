const Router = require("express").Router;
const Workout = require("../models/workoutPlan.js");

const router = Router();

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.put("/api/workouts/:id", (req, res) => {
    return
    Workout.findByIdAndUpdate(
       { _id: req.params.id }, req.body
    )
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.save(body)
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = Router