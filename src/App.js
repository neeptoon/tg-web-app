import {useEffect} from 'react';

import Button from './components/Button/Button';

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const handleClick = () => {
        tg.close();
    };

    return (
        <>
            <h1>HELLO TG APP</h1>
            <Button handleClick={handleClick}/>
        </>
    );
}

export default App;
