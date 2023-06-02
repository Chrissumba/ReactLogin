// LoginForm component
import React, { useState, useContext } from 'react';
import {ThemeContext,ThemeProvider} from './ThemeContext';

 const LoginForm = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please enter both email and password');
    } else {
      // Perform login logic here
      prompt('You have successfully logged in. Welcome to our website!');
    }
  };

  return (
   // <ThemeContext.Provider value="light">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder='Your Password is safe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

    </form>
    //</ThemeContext.Provider>
  );
};

export default LoginForm;

