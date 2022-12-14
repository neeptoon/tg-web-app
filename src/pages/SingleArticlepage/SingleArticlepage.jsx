import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {ArticleService} from '../../services/article';
import {Loader} from '../../components/UI/Loader';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {analyticService} from '../../services/analytics';
import {AppRoute, pathToPage} from '../../const';
import {ReactComponent as IncreasedText} from '../../assets/images/incText.svg';
import {ReactComponent as DecreasedText} from '../../assets/images/decText.svg';
import {useElementOnScreen} from '../../hooks/useElementOnScreen';
import {ZoomImageModal} from '../../components/ZoomImageModal';

import classes from './SingleArticlepage.module.scss';


export const SingleArticlepage = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [decreasedText, setDecreasedText] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const page = useRef(null);

    const [spyOfArticle, isVisibleSpyOfArticle] = useElementOnScreen({
        root: null,
        rootMargin: '80px',
        unobserve: false
    }, id);

    const [spyOfArrow, isVisibleSpyOfArrow] = useElementOnScreen({
        root: null,
        rootMargin: '20px'
    });

    const [fetchArticle, isLoading] = useFetching(async () => {
        const response = await ArticleService.getSingleArticle(id);
        setArticle(response);
    });

    useEffect(() => {
        fetchArticle();
    }, [id]);

    useEffect(() => {
        if(isVisibleSpyOfArticle) {
            analyticService.articleRead(article?.name, id);
        }

    }, [isVisibleSpyOfArticle, id]);

    useEffect(() => {
        if(article) {
            analyticService.sendUserMove({
                source: pathToPage[location.state] || location.state || pathToPage[AppRoute.Root],
                target: article.name
            });
        }
    }, [article]);

    function createMarkup() {
        if (article) {
            return {__html: article.content};
        }
    }

    function handleClick() {
        setDecreasedText(!decreasedText);
        decreasedText
            ? page.current.style.setProperty('--article-font-size', '12px')
            : page.current.style.setProperty('--article-font-size', '14px');
    }

    return (
        <CustomContainer>
            <section className={classes.page} ref={page}>
                {
                    isLoading
                        ? <Loader/>
                        : <>
                            {article &&
                                <>
                                    <ToPageLink page={AppRoute.Article} articleName={article.name}/>
                                    <div ref={spyOfArrow}></div>
                                    <h2 className={classes.heading}>{article.name}</h2>
                                    <div id="content" className={classes.content} >
                                        <div className={classes.text} dangerouslySetInnerHTML={createMarkup()} />
                                    </div>
                                    {article.next_id &&
                                        <button
                                            className={classes.nextArticle}
                                            onClick={() => {
                                                navigate(`/article/${article.next_id}`, {state: article.name});
                                            }}

                                        >?????????????? ?????????????????? ????????????
                                        </button>
                                    }
                                    <div ref={spyOfArticle}></div>
                                    <button
                                        className={classes.textDecreaseButton}
                                        onClick={handleClick}
                                    >
                                        {decreasedText ? <IncreasedText/> : <DecreasedText/>}
                                        <span className="visually-hidden">???????????? ???????????????????? ????????????</span>
                                    </button>

                                    {/*add arrow if aritcle is too long*/}
                                    {!isVisibleSpyOfArrow &&
                                        <div className={classes.downArrow}>
                                            <ToPageLink
                                                page={AppRoute.Article}
                                                articleName={article.name}
                                            />
                                        </div>
                                    }

                                    {/*add modal by click on image*/}
                                    <ZoomImageModal/>
                                </>
                            }
                        </>
                }
            </section>
        </CustomContainer>
    );
};

