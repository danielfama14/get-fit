const { Schema } = require('mongoose');

const workoutSchema = new Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    muscle: {
        type: String,
    },
    equipment: {
        type: String,
    },
    instructions: {
        type: String
    },
});

module.exports = workoutSchema;