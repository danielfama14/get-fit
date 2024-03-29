import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const TRACK_TODAY = gql`
  mutation trackToday($trackerInput: TrackerInput!) {
    trackToday(trackerInput: $trackerInput) {
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

export const REMOVE_TRACKER = gql`
  mutation removeTracker($trackerId: String!) {
    removeTracker(trackerId: $trackerId) {
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

export const ADD_USER_INFORMATION = gql`
  mutation addUserInformation($userInput: UserInput!) {
    addUserInformation(userInput: $userInput){
      username
      email
      height
      weight
      goal
      fullName
      profilePicture
    }
  }
`

export const ADD_WORKOUT = gql`
  mutation addWorkout($workoutInput: WorkoutInput!) {
    addWorkout(workoutInput: $workoutInput) {
      name
      type
      muscle
      equipment
      instructions
    }
  }
`
export const DELETE_WORKOUT = gql`
  mutation removeWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId){
      username
      email
      workouts {
        name
        type
        muscle
        equipment
        instructions
      }
    }
  }
`
