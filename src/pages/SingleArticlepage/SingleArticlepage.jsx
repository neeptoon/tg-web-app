import {useParams} from 'react-router-dom';

import {useEffect, useState} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {ArticleService} from '../../API/article';

import {Loader} from '../../components/UI/Loader';
import {ErrorAlert} from '../../components/UI/ErrorAlert';

import {ToPageLink} from '../../components/UI/ToPageLink';

import classes from './SingleArticlepage.module.scss';

export const SingleArticlepage = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);

    const [fetchArticle, isLoading, articleError] = useFetching(async () => {
        const response = await ArticleService.getSingleArticle(id);
        setArticle(response);
    });

    useEffect(() => {
        fetchArticle();
    }, [id]);

    function createMarkup() {
        if(article) {
            return {__html: article.content};
        }
    }

    return (
        <CustomContainer>
            <section className={classes.page}>
                {
                    isLoading
                        ? <Loader/>
                        : articleError
                            ? <ErrorAlert message={articleError}/>
                            : <>
                                <ToPageLink page={'/article'}/>
                                {article &&
                                    <>
                                        <h2 className={classes.heading}>{article.name}</h2>
                                        <div className={classes.content}>
                                            <div className={classes.text} dangerouslySetInnerHTML={createMarkup()} />
                                        </div>
                                    </>

                                }
                            </>
                }

            </section>
        </CustomContainer>
    );
};

