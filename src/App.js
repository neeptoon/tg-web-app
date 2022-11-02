import React, {useEffect} from 'react';

import {Routes, Route, Link} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {Quizpage} from './pages/Quizpage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Articles} from './pages/Articles';


import {useTelegram} from './hooks/useTelegram';


function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <header>

            </header>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/quiz" element={<Quizpage/>}/>
                <Route path="/article" element={<Articles/>}/>
                <Route path="*" element={<Notfoundpage/>}/>
            </Routes>
        </>
    );
}

export default App;
