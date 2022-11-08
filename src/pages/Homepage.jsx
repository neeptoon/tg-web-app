import {Container} from '@mui/material';
import React, {useEffect, useState} from 'react';

import {useFetching} from '../hooks/useFetching';
import {AuthService} from '../API/auth';
import {UserInfo} from '../components/UserInfo';
import {ArticleService} from '../API/article';
import {Loader} from '../components/UI/Loader';
import {ErrorAlert} from '../components/UI/ErrorAlert';
import {ActivityList} from '../components/ActivityList';
import {MainNav} from '../components/MainNav';


export const Homepage = () => {
    const [info, setInfo] = useState([]);


    const [fetchInfo, isLoading, infoError] = useFetching(async () => {
        const response = await Promise.all([
            AuthService.getUserName(),
            ArticleService.getUnreadArticlesCount(),
            ArticleService.getUnreadArticles()
        ]);
        setInfo(response);
    });

    useEffect(() => {
        fetchInfo();
    }, []);

    const [name, count, articles] = info;


    return (
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '100px',
                paddingBottom: '30px',
                maxWidth: '500px',
                minHeight: '100vh',
            }}>
                {
                    isLoading
                        ? <Loader/>
                        : infoError
                            ? <ErrorAlert message={infoError}/>
                            : <>
                                <UserInfo
                                    userName={name}
                                    unreadArticles={articles}
                                />
                                {articles && <ActivityList activities={articles}/>}
                                <MainNav/>
                            </>

                }
            </Container>
        </>
    );
};
