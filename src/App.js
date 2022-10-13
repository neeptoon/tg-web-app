import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp



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
            <button onClick={handleClick}>закрыть</button>
        </>
    );
}

export default App;
