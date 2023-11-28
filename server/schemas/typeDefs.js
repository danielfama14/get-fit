const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    height: String
    weight: String
    goal: String
    fullName: String
    tracker: [Tracker]
    savedRecipes: [Recipe]
}
type Tracker {
    trackerId: ID!
    date: String!
    workedOut: Boolean!
    caloriesBurned: Int
    stepsTaken: Int
    sleepDuration: Int
    waterIntake: Int
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
    getTracker(trackerId: ID!): Tracker
    getRecipe(recipeId: ID!): Recipe
}

type Auth {
    token: ID
    user: User
}
input TrackerInput {
    workedOut: Boolean!
    caloriesBurned: Int
    stepsTaken: Int
    sleepDuration: Int
    waterIntake: Int
    notes: String
}
input RecipeInput {
    name: String!
    description: String!
    recipeIngredients: [String]!
    instructions: String!
}

input UserInput {
    username: String
    email: String
    height: String
    weight: String
    goal: String
    fullName: String

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addUserInformation(userInput: UserInput): User
    trackToday(trackerInput: TrackerInput): User
    removeTracker(trackerId: ID!): User
    favoriteRecipe(recipeInput: RecipeInput): User
    removeRecipe(recipeId: ID!): User
}
`

module.exports = typeDefs;