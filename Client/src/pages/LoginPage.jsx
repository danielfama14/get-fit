import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use the LOGIN_USER mutation
  const [loginUser] = useMutation(LOGIN_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      // Execute the LOGIN_USER mutation
      const { data } = await loginUser({
        variables: {
          email,
          password,
        },
      });

      // Invoke the callback with the token on successful login
      onLoginSuccess(data.login.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p>Error in login: {error}</p>}
    </form>
  );
};

export default Login;
