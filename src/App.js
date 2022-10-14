import {useEffect} from 'react';

import {Header} from './components/Header/Header';

import {useTelegram} from './hooks/useTelegram';

function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </>
    );
}

export default App;
