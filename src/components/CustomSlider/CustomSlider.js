import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react';

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

export function CustomSlider() {
    const [value, setValue] = useState(70);
    return (
        <Box sx={{ width: 500 }}>
            <Slider
                aria-label="Custom marks"
                value={value}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
                max={200}
                onChange={(evt, value) => {
                    setValue(value);
                }}
            />
            <button>отправить</button>
        </Box>
    );
}
