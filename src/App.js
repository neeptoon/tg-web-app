import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';



import {Homepage} from './pages/Hompage/Homepage';
import {Quizpage} from './pages/Quizpage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Articlespage} from './pages/Articlespage';


import {useTelegram} from './hooks/useTelegram';
import {SingleArticlepage} from './pages/SingleArticlepage';

function App() {

    const {tg, onToggleButton, initData} = useTelegram();

    useEffect(() => {
        tg.ready();

    }, []);



    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/quiz" element={<Quizpage/>}/>
                <Route path="/article" element={<Articlespage/>}/>
                <Route path="/article/:id" element={<SingleArticlepage/>}/>
                <Route path="*" element={<Notfoundpage/>}/>
            </Routes>
        </>
    );
}

export default App;
