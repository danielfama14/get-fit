import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// query all of users information including tracker and recipe
export const QUERY_ME = gql`
 query user {
        user {
            _id
            username
            email
            weight
            height
            goal
            tracker {
                trackerId
                date
                workedOut
                caloriesBurned
                stepsTaken
                sleepDuration
                waterIntake
                notes
            }
            recipe {
                recipeId
                name
                description
                recipeIngredients {
                    name
                    quantity
                }
                instructions
            }
        }
    }
`;

export const QUERY_TRACKER = gql`
    user {
            _id
            username
            email
            weight
            height
            goal
            tracker {
                trackerId
                date
                workedOut
                caloriesBurned
                stepsTaken
                sleepDuration
                waterIntake
                notes
            }
    }
`;

export const QUERY_RECIPE = gql`
    user {
            _id
            username
            email
            weight
            height
            goal
            recipe {
                recipeId
                name
                description
                recipeIngredients {
                    name
                    quantity
                }
                instructions
            }
    }
`;

export const QUERY_SINGLE_TRACKER = gql`
    query getTracker($trackerId: ID!) {
        user {
            tracker(trackerId: $trackerId) {
                trackerId
                date
                workedOut
                caloriesBurned
                stepsTaken
                sleepDuration
                waterIntake
                notes
            }
        }
    }
`;

export const QUERY_SINGLE_RECIPE = gql`
  query getRecipe($recipeId: ID!) {
    user {
      recipe(recipeId: $recipeId) {
                recipeId
                name
                description
                recipeIngredients {
                    name
                    quantity
                }
                instructions
      }
    }
  }
`;