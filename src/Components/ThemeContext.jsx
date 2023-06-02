import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const themeValues = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};
