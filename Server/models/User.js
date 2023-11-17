const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const trackerSchema = require('./Tracker');
const recipesSchema = require('./Recipes');
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        weight: {
            type: Number
        },
        height: {
            type: Number
        },
        goal: {
            type: String,
            required: true
        },
        tracker: [trackerSchema],
        recipes: [recipesSchema],
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// query user's diet plans 
userSchema.virtual('recipeCount').get(function () {
    return this.recipes.length;
});

const User = model('User', userSchema);

module.exports = User;
