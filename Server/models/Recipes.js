const { Schema } = require('mongoose');

const recipesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    recipe_ingredients: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: String,
            },
        },
    ],
    instructions: {
        type: String,
    },
});

module.exports = recipesSchema;