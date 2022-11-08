import React, {useEffect, useState} from 'react';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../API/article';
import {useFetching} from '../../hooks/useFetching';
import {GoBackButton} from '../../components/UI/GoBackButton';
import {CustomContainer} from '../../components/UI/CustomContainer';

import PrimaryHeading from '../../components/UI/PrimaryHeading/PrimaryHeading';

import {Loader} from '../../components/UI/Loader';

import {ErrorAlert} from '../../components/UI/ErrorAlert';

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
                {
                    isLoading
                        ? <Loader/>
                        : articleError
                            ? <ErrorAlert message={articleError}/>
                            : <>
                                <GoBackButton/>
                                <div className={classes.heading}>
                                    <PrimaryHeading>Статьи</PrimaryHeading>
                                </div>
                                {articlesList && <NestedList list={articlesList}/>}
                            </>
                }

            </CustomContainer>
        </div>

    );
};
