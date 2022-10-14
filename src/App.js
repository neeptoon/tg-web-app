import {useEffect} from 'react';
import Button from './components/Button/Button';

const tg = window.Telegram.WebApp

const b = 3;

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    const handleClick = () => {
        tg.close();
    }

    return (
        <>
            <h1>hello tg-app</h1>
            <Button/>
        </>
    );
}

export default App;
