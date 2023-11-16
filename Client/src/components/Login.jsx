import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

// Define the GraphQL login mutation matching the backend
const LOGIN_MUTATION = gql`
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

const Login = ({ onLoginSuccess }) => {
  // States for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the login mutation
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Execute the login mutation
      const response = await login({
        variables: {
          email: email,
          password: password
        }
      });

      // Invoke the callback with the token on successful login
      onLoginSuccess(response.data.login.token);
    } catch (error) {
      // Log the error or update the UI to inform the user
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>Login</button>
      {error && <p>Error in login: {error.message}</p>}
    </form>
  );
};

export default Login;
