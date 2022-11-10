import React, {useEffect, useState} from 'react';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../API/article';
import {useFetching} from '../../hooks/useFetching';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {CustomContainer} from '../../components/UI/CustomContainer';

import {PrimaryHeading} from '../../components/UI/PrimaryHeading';

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
        <CustomContainer>
            <section className={classes.articlesPage}>

                {
                    isLoading
                        ? <Loader/>
                        : articleError
                            ? <ErrorAlert message={articleError}/>
                            : <>
                                <ToPageLink page={'/'}/>
                                <div className={classes.heading}>
                                    <PrimaryHeading>Статьи</PrimaryHeading>
                                </div>
                                {articlesList && <NestedList list={articlesList}/>}
                            </>
                }

            </section>
        </CustomContainer>

    );
};
