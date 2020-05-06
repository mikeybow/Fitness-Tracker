const Router = require("express").Router;
const Workout = require("../models/workoutPlan.js");

const router = Router();

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/exercise", (req, res) => {
    res.render("exercise.html");
});

router.get("/stats", (req, res) => {
    res.render("stats.html");
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(workout_db => {
        console.log(workout_db)
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.put("/api/workouts/:id", (req, res) => {
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

//router.delete 
//you will have a delete route that works similarly to your put route above 

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(workout_db => {
        res.json(workout_db);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;