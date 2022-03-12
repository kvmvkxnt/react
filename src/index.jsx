import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Context as ThemeContext, Provider as ThemeProvider} from './Context/Theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);