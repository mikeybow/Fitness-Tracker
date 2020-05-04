const router = require("express").Router();
const Workout = require("../models/workoutPlan.js");

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
        req.params.id, {}
    )
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
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

