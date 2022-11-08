import React, {useEffect, useState} from 'react';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../API/article';
import {useFetching} from '../../hooks/useFetching';
import {GoBackButton} from '../../components/UI/GoBackButton';
import {CustomContainer} from '../../components/UI/CustomContainer';

import PrimaryHeading from '../../components/UI/PrimaryHeading/PrimaryHeading';

import {Loader} from '../../components/UI/Loader';

import classes from './Articlespage.module.scss';

export const Articlespage = () => {
    const [articlesList, setArticlesList] = useState(null);


    const [fetchArticles, isLoading, articleError] = useFetching(async () => {
        const response = await ArticleService.getArticles();
        setArticlesList(response);
    });


    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div className={classes.articlesPage}>
            <CustomContainer>
                <GoBackButton/>

                <div className={classes.heading}>
                    <PrimaryHeading>Статьи</PrimaryHeading>
                </div>



                {articleError && <h3>Произошла ошибка {articleError}</h3>}

                {
                    isLoading
                        ? <Loader/>
                        : <NestedList title={'Онбординг, день 1'}/>
                }


            </CustomContainer>
        </div>

    );
};
