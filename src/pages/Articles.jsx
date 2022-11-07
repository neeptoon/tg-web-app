import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container} from '@mui/material';

import {NestedList} from '../components/NestedList';
import {ArticleService} from '../API/article';
import {useFetching} from '../hooks/useFetching';

export const Articles = () => {
    const navigate = useNavigate();
    const [articlesList, setArticlesList] = useState(null);


    const [fetchArticles, isLoading, articleError] = useFetching(async () => {
        const response = await ArticleService.getArticles();
        setArticlesList(response);
    });



    useEffect(() => {
        fetchArticles();
    }, []);

    const goBack = () => navigate(-1);
    return (
        <Container>
            <button onClick={goBack}>👈 назад</button>

            {articleError && <h3>Произошла ошибка {articleError}</h3>}

            {
                isLoading
                    ? <h3>статьи грузятся...</h3>
                    : <NestedList title={'Онбординг, день 1'}/>
            }


        </Container>
    );
};
