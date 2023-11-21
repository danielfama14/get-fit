const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    tracker: [Tracker]
    recipe: [Recipe]
}
type Tracker {
    trackerId: ID!
    date: Date!
    workedOut: Boolean!
    caloriesBurned: Number
    stepsTaken: Number
    sleepDuration: Number
    waterIntake: Number
    notes: String
}
type Recipe {
    recipeId: ID!
    name: String!
    description: String!
    recipeIngredients: [String]!
    instructions: String!
}
type Query {
    users: [User]
    user: User
}

type Auth {
    token: ID
    user: User
}
input TrackerInput {
    workedOut: Boolean!
    caloriesBurned: Number
    stepsTaken: Number
    sleepDuration: Number
    waterIntake: Number
    notes: String
}
input RecipeInput {
    name: String!
    description: String!
    recipeIngredients: [String]!
    instructions: String!
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    trackToday(trackerInput: TrackerInput): User
    removeTracker(trackerId: ID!): User
    favoriteRecipe: (recipeInput: RecipeInput): User
    removeRecipe: (recipeId: ID!): User
}
`

module.exports = typeDefs;