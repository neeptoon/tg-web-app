import React, {useEffect, useState} from 'react';

import {Container} from '@mui/material';

import {NestedList} from '../../components/NestedList';
import {ArticleService} from '../../API/article';
import {useFetching} from '../../hooks/useFetching';
import {GoBackButton} from '../../components/UI/GoBackButton';

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
        <Container>
            <GoBackButton/>

            {articleError && <h3>Произошла ошибка {articleError}</h3>}

            {
                isLoading
                    ? <h3>статьи грузятся...</h3>
                    : <NestedList title={'Онбординг, день 1'}/>
            }


        </Container>
    );
};
