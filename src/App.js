import React, {useEffect, useRef} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {ErrorBoundary} from 'react-error-boundary';

import {Homepage} from './pages/Hompage';
import {Quizpage} from './pages/Quizpage';
import {Errorpage} from './pages/Errorpage';
import {Articlespage} from './pages/Articlespage';
import {useTelegram} from './hooks/useTelegram';
import {SingleArticlepage} from './pages/SingleArticlepage';
import {Finalpage} from './pages/Finalpage';
import {AppRoute} from './const';
import {AuthService} from './services/auth';
import {ErrorFallback} from './components/ErrorFallback';


function App() {
    const {tg} = useTelegram();
    const ref = useRef(null);
    const navigate = useNavigate();

    const fetchAuth = () => AuthService.getUserAuth()
        .catch(err => navigate(AppRoute.Error, {state: err.response.data.status}));


    useEffect(() => {
        tg.ready();
        tg.expand();
        ref.currnet = setInterval(fetchAuth, 60000);
        return clearInterval(ref.current);
    }, []);

    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes>
                    <Route path={AppRoute.Root} element={<Homepage/>}/>
                    <Route path={AppRoute.Quiz} element={<Quizpage/>}/>
                    <Route path={AppRoute.Article} element={<Articlespage/>}/>
                    <Route path={AppRoute.SingleArticle} element={<SingleArticlepage/>}/>
                    <Route path={AppRoute.Error} element={<Errorpage status={404}/>}/>
                    <Route path={AppRoute.Final} element={<Finalpage/>}/>
                </Routes>
            </ErrorBoundary>
        </>
    );
}

export default App;
