import React from 'react';

import ReactDOM from 'react-dom/client';
import {CssBaseline} from '@mui/material';

import App from './App';

import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <App />
    </React.StrictMode>
);

