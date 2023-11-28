const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    height: String
    weight: String
    goal: String
    fullName: String
    profilePicture: String
    tracker: [Tracker]
    workouts: [Workout]
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

type Workout {
    workoutId: ID!
    name: String
    type: String
    muscle: String
    equipment: String
    instructions: String
}

type Query {
    users: [User]
    user: User
    getTracker(trackerId: ID!): Tracker
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

input UserInput {
    username: String
    email: String
    height: String
    weight: String
    goal: String
    fullName: String
    profilePicture: String

}
input WorkoutInput {
    name: String
    type: String
    muscle: String
    equipment: String
    instructions: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addUserInformation(userInput: UserInput): User
    trackToday(trackerInput: TrackerInput): User
    removeTracker(trackerId: ID!): User
    addWorkout(workoutInput: WorkoutInput): User
    removeWorkout(workoutId: ID!): User
}
`

module.exports = typeDefs;