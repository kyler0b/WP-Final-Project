const express = require('express');
const workouts = require('../model/workouts');

const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(workouts.getWorkouts());
    })
    .get('/:id', (req, res) => {

        const workout = workouts.getWorkout(+req.params.id);
        if (workout) {
            res.status(200).send(workout);
        } else {
            res.status(404).send('Workout not found');
        }
    });


module.exports = app;