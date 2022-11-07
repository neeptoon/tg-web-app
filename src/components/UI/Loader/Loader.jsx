import {Backdrop, CircularProgress} from '@mui/material';
import React from 'react';

export const Loader = () => {
    return (
        <Backdrop
            sx={{color: '#00B944', backgroundColor: '#ffffff'}}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
};
