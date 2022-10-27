import {useEffect} from 'react';

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
        </>
    );
}

export default App;
