import React, {useEffect} from 'react';

import {Routes, Route, Link} from 'react-router-dom';

import { ThemeProvider} from '@mui/material/styles';

import {CssBaseline} from '@mui/material';

import {GlobalStyles} from '@mui/material';

import {Homepage} from './pages/Homepage';
import {Quizpage} from './pages/Quizpage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Article} from './pages/Article';


import {useTelegram} from './hooks/useTelegram';
import {theme} from './theme';
import {globalStyles} from './globalStyle';




function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <GlobalStyles styles={globalStyles}/>

            <span className="visually-hidden">ghbdtn</span>


            <header>
                <Link to={'/'}>Home</Link>
                <Link to={'/quiz'}>Quiz</Link>
                <Link to={'/article'}>Article</Link>
            </header>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/quiz" element={<Quizpage/>}/>
                <Route path="/article" element={<Article/>}/>
                <Route path="*" element={<Notfoundpage/>}/>
            </Routes>


        </ThemeProvider>
    );
}

export default App;
