import {useEffect} from 'react';

import {Button, Slider, Typography} from '@mui/material';

import {Header} from './components/Header';
import {useTelegram} from './hooks/useTelegram';


function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <h1>hello woerlsldf</h1>
            <Header/>
            <button>toggle</button>
            <Button variant="contained">hello from material button</Button>
            <Typography variant="button">Это для добавления типографики</Typography>

            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />

        </>
    );
}

export default App;
