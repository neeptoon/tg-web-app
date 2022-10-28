import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssBaseline} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CssBaseline/>
            <App />
        </BrowserRouter>

    </React.StrictMode>
);

