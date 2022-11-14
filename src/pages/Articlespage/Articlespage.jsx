import React, {useEffect, useState} from 'react';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../services/article';
import {useFetching} from '../../hooks/useFetching';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {CustomContainer} from '../../components/UI/CustomContainer';

import {PrimaryHeading} from '../../components/UI/PrimaryHeading';

import {Loader} from '../../components/UI/Loader';

import {ErrorAlert} from '../../components/UI/ErrorAlert';

import classes from './Articlespage.module.scss';

export const Articlespage = () => {
    const [articlesList, setArticlesList] = useState(null);
    const [isExpanded, setExpanded] = useState(false);


    const [fetchArticles, isLoading] = useFetching(async () => {
        const response = await ArticleService.getArticles();
        setArticlesList(response);
    });


    useEffect(() => {
        fetchArticles();
    }, []);

    const handleClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <CustomContainer>
            <section className={classes.articlesPage}>

                {
                    isLoading
                        ? <Loader/>
                        :  <>
                            <div className={classes.wrapper}>
                                <ToPageLink page={'/'}/>
                                <button className={classes.toggle} onClick={handleClick}>
                                    {!isExpanded ? 'Показать' : 'Скрыть'} содержание категорий
                                </button>
                            </div>
                            <div className={classes.heading}>
                                <PrimaryHeading>Статьи</PrimaryHeading>
                            </div>
                            {articlesList && <NestedList list={articlesList} isExpanded={isExpanded}/>}
                        </>
                }

            </section>
        </CustomContainer>

    );
};
