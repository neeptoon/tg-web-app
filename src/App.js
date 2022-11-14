import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react';

import {Homepage} from './pages/Hompage';
import {Quizpage} from './pages/Quizpage';
import {Errorpage} from './pages/Errorpage';
import {Articlespage} from './pages/Articlespage';
import {useTelegram} from './hooks/useTelegram';
import {SingleArticlepage} from './pages/SingleArticlepage';
import {AppRoute} from './const';
import {AppContext} from './context';
import {Loader} from './components/UI/Loader';


function App() {

    const {answer, error} = useContext(AppContext);


    const {tg, onToggleButton, initData} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    if(error.status) {
        return <Errorpage code={error.status}/>;
    }

    return (
        <>
            <Routes>
                <Route path={AppRoute.Root} element={<Homepage/>}/>
                <Route path={AppRoute.Quiz} element={<Quizpage/>}/>
                <Route path={AppRoute.Article} element={<Articlespage/>}/>
                <Route path={AppRoute.SingleArticle} element={<SingleArticlepage/>}/>
                <Route path={AppRoute.NotFound} element={<Errorpage code={404}/>}/>
            </Routes>
        </>
    );
}

export default App;
