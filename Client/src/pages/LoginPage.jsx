import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    console.log('Login attempted with:', username, password);
    // Here you can add logic for handling the login, e.g., verifying credentials, setting state, etc.
  };

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
