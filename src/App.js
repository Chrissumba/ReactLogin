import React, { useContext } from 'react';
import LoginForm from './Components/LoginForm';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';
const App = () => {
    return ( <
        ThemeProvider >
        <
        div >
        <
        LoginForm / >
        <
        /div> <
        /ThemeProvider>
    );
};

export default App;