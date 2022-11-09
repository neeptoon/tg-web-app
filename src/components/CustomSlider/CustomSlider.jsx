import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import classes from './CustomSlider.module.scss';



function valuetext(value) {
    return `${value}`;
}

export function CustomSlider({answ, handleChange, maxValue, marks}) {

    return (
        <Box sx={{ width: '97%' }}>
            <Slider
                aria-label="Custom marks"
                value={answ}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                marks={marks}
                max={maxValue}
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
                <input
                    type="number"
                    max={maxValue}
                    className={classes.value}
                    name="value"
                    value={answ > maxValue ? maxValue : answ}
                    onChange={handleChange}
                />
                <button className={classes.sendButton} type="submit">Отправить</button>
                <button className={classes.changeButton} type="button">Другой вопрос</button>
            </form>
        </Box>
    );
}
