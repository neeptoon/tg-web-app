import {Container, Typography} from '@mui/material';
import {useState} from 'react';

import NestedList from '../components/NestedList/NestedList';

export const Homepage = () => {

    const [name, setName] = useState('Олег');

    return (
        <>
            <Container>
                <Typography
                    sx={{
                        fontWeight: 600,
                    }}
                    variant="h4"
                    component="p"
                >
                    Привет, {name}!
                </Typography>

                <NestedList title={'Онбординг, день 1'}/>
            </Container>

        </>
    );
};
