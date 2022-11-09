import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react';

import classes from './CustomSlider.module.scss';


const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },
    {
        value: 150,
        label: '150',
    },
    {
        value: 150,
        label: '150',
    },
    {
        value: 200,
        label: '200',
    },
];

function valuetext(value) {
    return `${value}`;
}

export function CustomSlider({answ, handleChange}) {

    return (
        <Box sx={{ width: '97%' }}>
            <Slider
                aria-label="Custom marks"
                value={answ}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                marks={marks}
                max={200}
                onChange={(evt) => {
                    handleChange(evt);
                }}

                sx={{
                    color: 'var(--primary-violet)',
                    '& .MuiSlider-mark': {
                        display: 'none'
                    },
                    '& .MuiSlider-markLabel': {
                        color: '#B6B6BA'
                    },
                    '& .MuiSlider-valueLabel': {
                        backgroundColor: 'white',
                        color: 'black',
                        boxShadow: '0px 3px 13px 0 rgba(0, 0, 0, 0.25)'
                    },
                    '& .MuiSlider-thumb:hover': {
                        boxShadow: '0px 0px 0px 12px rgb(115 25 130 / 20%);',
                    },
                    '& .MuiSlider-thumb.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 12px rgb(115 25 130 / 20%);',
                    },
                }}
            />
            <form className={classes.sliderForm}>
                <input type="number" className={classes.value} name="value" value={answ} onChange={handleChange}/>
                <button className={classes.sendButton} type="submit">Отправить</button>
                <button className={classes.changeButton} type="button">Другой вопрос</button>
            </form>
        </Box>
    );
}
