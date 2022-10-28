import {useEffect} from 'react';

import {Routes, Route, Link} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {Quizpage} from './pages/Quizpage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Article} from './pages/Article';

import {useTelegram} from './hooks/useTelegram';



function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
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


        </>
    );
}

export default App;
