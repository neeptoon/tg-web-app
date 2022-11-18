import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {useFetching} from '../../hooks/useFetching';
import {AuthService} from '../../services/auth';
import {ArticleService} from '../../services/article';
import {UserInfo} from '../../components/UserInfo';
import {Loader} from '../../components/UI/Loader';
import {ActivityList} from '../../components/ActivityList';
import {MainNav} from '../../components/MainNav';
import {CustomContainer} from '../../components/UI/CustomContainer';

import {pathToPage} from '../../const';

import {analyticService} from '../../services/analytics';

import classes from './Homepage.module.scss';


export const Homepage = () => {
    const [info, setInfo] = useState([]);
    const location = useLocation();

    const [fetchInfo, isLoading] = useFetching(async () => {
        const response = await Promise.all([
            AuthService.getUserInfo(),
            ArticleService.getNewArticles()
        ]);
        setInfo(response);
    });

    useEffect(() => {
        fetchInfo();
        analyticService.sendUserMove({source: pathToPage[location.state], target: pathToPage[location.pathname]});
    }, []);

    const [user, newArticles] = info;


    return (
        <CustomContainer>
            {isLoading ? <Loader/> :
                <section className={classes.homePage}>
                    {user && <UserInfo user={user}/>}
                    {newArticles && <ActivityList newArticles={newArticles}/>}
                    <MainNav/>
                </section>}
        </CustomContainer>
    );
};
