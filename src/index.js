import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {ThemeProvider} from '@mui/material/styles';

import {CssBaseline, GlobalStyles} from '@mui/material';

import App from './App';
import {theme} from './theme';

import {globalStyles} from './globalStyle';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyles styles={globalStyles}/>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

