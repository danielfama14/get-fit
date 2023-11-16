const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
}

type Query {
    users: [User]
    user: User
}

type Auth {
    token: ID
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`

module.exports = typeDefs;