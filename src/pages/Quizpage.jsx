import {useNavigate} from 'react-router-dom';

import {Container} from '@mui/material';

import {CustomSlider} from '../components/CustomSlider';


export const Quizpage = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <Container>
            <button onClick={goBack}>⬅ назад</button>
            <h1>Проверь интуицию!</h1>
            <p>как думаешь, сколько человек в сутки пользуются этим ботом?</p>
            <CustomSlider withValue/>
        </Container>
    );
};
