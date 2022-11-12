import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {useState} from 'react';

import {getMarksSlider} from '../../helpers';

import classes from './CustomSlider.module.scss';

function valuetext(value) {
    return `${value}`;
}

export function CustomSlider({handleChangeQuestion, onSubmit, question}) {
    const {id, text, min, max, correct, article_id} = question;

    const initialState = Math.floor(Math.random() * (max - min) + min);

    const [sliderValue, setSliderValue] = useState(initialState);

    const handleChange = (evt) => setSliderValue(Number(evt.target.value));

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(evt.currentTarget.answer.value);
    };

    return (
        <Box sx={{ width: '97%' }}>
            <Slider
                aria-label="Custom marks"
                value={sliderValue}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                marks={getMarksSlider(min, max)}
                min={min}
                max={max}
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
            <form className={classes.sliderForm} onSubmit={handleSubmit}>
                <input
                    type="number"
                    max={max}
                    className={classes.value}
                    name="answer"
                    value={sliderValue > max ? max : sliderValue}
                    onChange={handleChange}
                />
                <button className={classes.sendButton} type="submit">Отправить</button>
                <button className={classes.changeButton} onClick={handleChangeQuestion} type="button">Другой вопрос</button>
            </form>
        </Box>
    );
}
