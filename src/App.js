import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react';

import {Homepage} from './pages/Hompage';
import {Quizpage} from './pages/Quizpage';
import {Notfoundpage} from './pages/NotFoundpage';
import {Articlespage} from './pages/Articlespage';
import {useTelegram} from './hooks/useTelegram';
import {SingleArticlepage} from './pages/SingleArticlepage';
import {AppRoute} from './const';
import {AppContext} from './context';


function App() {

    const {isLoading, answer, error} = useContext(AppContext);
    console.log(isLoading, answer, error);

    const {tg, onToggleButton, initData} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);



    return (
        <>
            <Routes>
                <Route path={AppRoute.Root} element={<Homepage/>}/>
                <Route path={AppRoute.Quiz} element={<Quizpage/>}/>
                <Route path={AppRoute.Article} element={<Articlespage/>}/>
                <Route path={AppRoute.SingleArticle} element={<SingleArticlepage/>}/>
                <Route path={AppRoute.NotFound} element={<Notfoundpage/>}/>
            </Routes>
        </>
    );
}

export default App;
