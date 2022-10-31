import {Container, Divider, Typography} from '@mui/material';
import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import {Colors} from '../components/Colors';

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

                <Link to={'/quiz'}>Quiz</Link>
                <Divider/>
                <Link to={'/article'}>Articles</Link>

                <Divider/>
                <Colors/>

            </Container>

        </>
    );
};
