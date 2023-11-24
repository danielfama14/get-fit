const { User } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async (parent, args) => {
            const allUsers = await User.find()
                .select('-__v -password');
            return allUsers
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');
                console.log('User Data:', userData);
                return userData;
            }
        },
        // get single tracker from user's arrays
        getTracker: async (parent, { trackerId }, context) => {
            if (context.user) {
                const updatedUser = await User.findById(
                    { _id: context.user._id }
                ).select('-__v -password');
                const singleTracker = updatedUser.tracker.find(tracker => tracker.trackerId === trackerId);
                return singleTracker;
            }
        },
        // get single recipe from user's favorite arrays
        getRecipe: async (parent, { recipeId }, context) => {
            if (context.user) {
                const updatedUser = await User.findById(
                    { _id: context.user._id }
                ).select('-__v -password');
                const singleRecipe = updatedUser.recipe.find(recipe => recipe.recipeId === recipeId);
                return singleRecipe;
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Invalid email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Invalid password');
            }
            const token = signToken(user);
            return { token, user };
        },

        addUserInformation: async (parent, { userInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $set: userInput },
                    { new: true }
                ).select('-__v')
                return updatedUser
            }
        },

        // for the tracker
        trackToday: async (parent, { trackerInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { tracker: trackerInput } },
                    { new: true }
                ).select('-__v').populate('tracker');
                return updatedUser
            }
        },
        removeTracker: async (parent, { trackerId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { tracker: { trackerId: trackerId } } },
                    { new: true }
                ).select('-__v').populate('tracker');
                return updatedUser;
            }
        },

        // for the recipe
        favoriteRecipe: async (parent, { recipeInput }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedRecipes: recipeInput } },
                    { new: true }
                ).select('-__v').populate('savedRecipes');
                return updatedUser;
            }
        },
        removeRecipe: async (parent, { recipeId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedRecipes: { recipeId: recipeId } } },
                    { new: true }
                ).select('-__v').populate('savedRecipes');
                return updatedUser
            }
        },


    },

}
module.exports = resolvers;