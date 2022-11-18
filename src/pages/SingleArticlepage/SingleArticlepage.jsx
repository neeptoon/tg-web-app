import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {ArticleService} from '../../services/article';
import {Loader} from '../../components/UI/Loader';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {analyticService} from '../../services/analytics';

import {AppRoute, pathToPage} from '../../const';

import classes from './SingleArticlepage.module.scss';

export const SingleArticlepage = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const location = useLocation();
    const target = useRef(null);

    const [fetchArticle, isLoading] = useFetching(async () => {
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
            analyticService.articleRead(article.name, id);
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

    if(article) {
        analyticService.sendUserMove({source: pathToPage[location.state], target: article.name});
    }

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
                        : <>
                            <ToPageLink page={AppRoute.Article}/>
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

