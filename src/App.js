import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react';

import {Homepage} from './pages/Hompage';
import {Quizpage} from './pages/Quizpage';
import {Errorpage} from './pages/Errorpage';
import {Articlespage} from './pages/Articlespage';
import {useTelegram} from './hooks/useTelegram';
import {SingleArticlepage} from './pages/SingleArticlepage';
import {Finalpage} from './pages/Finalpage';
import {AppRoute} from './const';
import {AppContext} from './context';


function App() {
    const {error} = useContext(AppContext);
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
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
                <Route path={AppRoute.Error} element={<Errorpage code={404}/>}/>
                <Route path={AppRoute.Final} element={<Finalpage/>}/>
            </Routes>
        </>
    );
}

export default App;
