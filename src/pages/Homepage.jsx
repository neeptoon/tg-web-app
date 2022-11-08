import {Container} from '@mui/material';
import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import {useFetching} from '../hooks/useFetching';
import {AuthService} from '../API/auth';
import {UserInfo} from '../components/UserInfo';
import {ArticleService} from '../API/article';
import {Loader} from '../components/UI/Loader';
import {ErrorAlert} from '../components/UI/ErrorAlert';
import {ActivityList} from '../components/ActivityList';


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
            <Container sx={{paddingTop: '100px'}}>
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
                                <Link to={'/quiz'}>Quiz</Link>
                                <Link to={'/article'}>Articles</Link>
                            </>

                }
            </Container>
        </>
    );
};
