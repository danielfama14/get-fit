import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    console.log('Login attempted with:', username, password);
    // Here you will handle the login logic
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
