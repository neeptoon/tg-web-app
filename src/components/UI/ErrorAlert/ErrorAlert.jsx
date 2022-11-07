import React from 'react';
import {Alert, AlertTitle} from '@mui/material';

export const ErrorAlert = ({message}) => {
    return (
        <Alert variant="filled" severity="error">
            <AlertTitle>Ошибка!</AlertTitle>
            {message || 'ошибка загрузки данных'}
        </Alert>
    );
};
