import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Container} from '@mui/material';

import {NestedList} from '../components/NestedList';

export const Articles = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return (
        <Container>
            <button onClick={goBack}>👈 назад</button>
            <NestedList title={'Онбординг, день 1'}/>
        </Container>
    );
};
