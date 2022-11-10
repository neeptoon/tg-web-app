import {useParams} from 'react-router-dom';

import {useEffect, useRef, useState} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {ArticleService} from '../../API/article';

import {Loader} from '../../components/UI/Loader';
import {ErrorAlert} from '../../components/UI/ErrorAlert';

import {ToPageLink} from '../../components/UI/ToPageLink';

import {analitycService} from '../../API/analitycs';

import classes from './SingleArticlepage.module.scss';

export const SingleArticlepage = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const target = useRef(null);

    const [fetchArticle, isLoading, articleError] = useFetching(async () => {
        const response = await ArticleService.getSingleArticle(id);
        setArticle(response);
    });

    const options = {
        root: null,
        rootMargin: '80px',
    };

    const callback = (entries, observer) => {
        const [entry] = entries;
        if(entry.isIntersecting) {
            observer.unobserve(entry.target);
            analitycService.articleRead(article.name, id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        if(target.current) {
            observer.observe(target.current);
        }
    }, [target, options]);

    useEffect(() => {
        fetchArticle();
    }, [id]);


    function createMarkup() {
        if (article) {
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
                                        <div className={classes.content} >
                                            <div className={classes.text} dangerouslySetInnerHTML={createMarkup()} />
                                        </div>
                                        <div ref={target} ></div>
                                    </>
                                }
                            </>
                }
            </section>
        </CustomContainer>
    );
};

