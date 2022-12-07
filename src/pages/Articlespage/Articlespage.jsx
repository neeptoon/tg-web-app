import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from '@mui/material';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../services/article';
import {useFetching} from '../../hooks/useFetching';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {PrimaryHeading} from '../../components/UI/PrimaryHeading';
import {Loader} from '../../components/UI/Loader';
import {analyticService} from '../../services/analytics';
import {AppRoute, pathToPage} from '../../const';

import {useLocalStorage} from '../../hooks/useLocalStorage';

import classes from './Articlespage.module.scss';

export const Articlespage = () => {
    const [articlesList, setArticlesList] = useState(null);
    const [isExpanded, setExpanded] = useState(false);
    const location = useLocation();

    const [currentOpenedItems, setCurrentOpendedItems] = useLocalStorage({}, 'currentOpenedItems');

    const [fetchArticles, isLoading] = useFetching(async () => {
        const response = await ArticleService.getArticles();
        setArticlesList(response);
    });

    useEffect(() => {
        fetchArticles();
        analyticService
            .sendUserMove({
                source: pathToPage[location.state] || location.state,
                target: pathToPage[location.pathname]
            });
    }, []);

    useEffect(() => {
        if (!Object.values(currentOpenedItems).includes(false)) {
            setExpanded(true);
        } else if (Object.values(currentOpenedItems).indexOf(true) === -1) {
            setExpanded(false);
        }
    }, [currentOpenedItems]);

    useEffect(() => {
        if (articlesList) {
            const customizedList = articlesList.reduce((accum, current) => {
                accum[current.name] = isExpanded;
                return accum;
            }, {});
            setCurrentOpendedItems(customizedList);
        }

    }, [isExpanded]);

    const handleClick = () => {
        setExpanded(!isExpanded);
    };

    const categoryClickHandler = (name) => {
        setCurrentOpendedItems({...currentOpenedItems, ...{[name]: !currentOpenedItems[name]} });
    };

    return (
        <Container sx={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            maxWidth: '500px',
        }}>
            <section className={classes.articlesPage}>
                {
                    isLoading
                        ? <Loader/>
                        :  <>
                            <div className={classes.wrapper}>
                                <ToPageLink page={AppRoute.Root}/>
                                <button className={classes.toggle} onClick={handleClick}>
                                    {!isExpanded ? 'Показать' : 'Скрыть'} содержание категорий
                                </button>
                            </div>
                            <div className={classes.heading}>
                                <PrimaryHeading>Статьи</PrimaryHeading>
                            </div>
                            {articlesList && <NestedList
                                articlesList={articlesList}
                                categoryClickHandler={categoryClickHandler}
                                currentOpenedItems={currentOpenedItems}
                            />}
                        </>
                }
            </section>
        </Container>

    );
};
