const { Schema } = require('mongoose');

const trackerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    workedOut: {
        type: Boolean,
        default: false,
    },
    caloriesBurned: {
        type: Number,
    },
    caloriesIntake: {
        type: Number,
    },
    stepsTaken: {
        type: Number,
    },
    sleepDuration: {
        type: Number,
    },
    waterIntake: {
        type: Number,
    },
    notes: {
        type: String,
    },
});

module.exports = trackerSchema;