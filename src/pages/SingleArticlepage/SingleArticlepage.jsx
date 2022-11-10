import {useParams} from 'react-router-dom';

import {useEffect, useState} from 'react';

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

    const [fetchArticle, isLoading, articleError] = useFetching(async () => {
        const response = await ArticleService.getSingleArticle(id);
        setArticle(response);
    });


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function() {
            document.removeEventListener('scroll', scrollHandler);
        };

    }, [article]);

    const scrollHandler = (evt) => {
        const scrollHeight = evt.target.documentElement.scrollHeight;
        const scrollTop = evt.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;

        if (scrollHeight - (scrollTop + innerHeight) < 100) {
            {article && analitycService.articleRead(article.name, id);}
            document.removeEventListener('scroll', scrollHandler);
        }

    };

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
                                            {/*todo uncoment after analytics send*/}
                                            {/*<div className={classes.text} dangerouslySetInnerHTML={createMarkup()} />*/}
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, cum, cupiditate deserunt dolor eos incidunt laboriosam natus nobis, omnis perspiciatis quis quo! Aperiam ea fugit necessitatibus nihil nisi.
                                            </p>
                                        </div>
                                    </>
                                }
                            </>
                }
            </section>
        </CustomContainer>
    );
};

