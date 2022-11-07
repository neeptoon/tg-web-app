import {Container, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import {useFetching} from '../hooks/useFetching';
import AuthService from '../API/auth';
import UserInfo from '../components/UserInfo/UserInfo';




export const Homepage = () => {

    const [userName, setUserName] = useState('');
    const [fetchUserName, isLoading, userNameError] = useFetching(async () => {
        const response = await AuthService.getUserName();
        setUserName(response);
    });

    useEffect(() => {
        fetchUserName();
    }, []);

    return (
        <>
            <Container>
                <UserInfo userName={userName}/>


                <Link to={'/quiz'}>Quiz</Link>

                <Link to={'/article'}>Articles</Link>




            </Container>

        </>
    );
};
