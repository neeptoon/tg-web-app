import React, {useEffect, useState} from 'react';

import {useFetching} from '../../hooks/useFetching';
import {AuthService} from '../../API/auth';
import {ArticleService} from '../../API/article';
import {UserInfo} from '../../components/UserInfo';
import {Loader} from '../../components/UI/Loader';
import {ErrorAlert} from '../../components/UI/ErrorAlert';
import {ActivityList} from '../../components/ActivityList';
import {MainNav} from '../../components/MainNav';

import {CustomContainer} from '../../components/UI/CustomContainer';

import classes from './Homepage.module.scss';


export const Homepage = () => {
    const [info, setInfo] = useState([]);


    const [fetchInfo, isLoading, infoError] = useFetching(async () => {
        const response = await Promise.all([
            AuthService.getUserInfo(),
            ArticleService.getNewArticles()
        ]);
        setInfo(response);
    });

    useEffect(() => {
        fetchInfo();
    }, []);

    const [user, newArticles] = info;


    return (
        <CustomContainer>
            <section className={classes.homePage}>
                {
                    isLoading
                        ? <Loader/>
                        : infoError
                            ? <ErrorAlert message={infoError}/>
                            : <>
                                {user && <UserInfo user={user}/>}
                                {newArticles && <ActivityList newArticles={newArticles}/>}
                                <MainNav/>
                            </>
                }
            </section>
        </CustomContainer>
    );
};
