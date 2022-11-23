import {useLocation, useNavigate} from 'react-router-dom';

import {useEffect} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {AppRoute, pathToPage} from '../../const';

import WrongAnswImg from '../../assets/images/wrong-answer.png';
import RightAnswImg from '../../assets/images/right-answer.png';

import {analyticService} from '../../services/analytics';

import classes from './Finalpage.module.scss';


export const Finalpage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {answer, result, article_id} = location.state.answer;

    useEffect(() => {
        analyticService.sendUserMove({source: pathToPage[AppRoute.Quiz], target: pathToPage[location.pathname]});
    }, []);

    return (
        <CustomContainer>
            <section className={classes.finalpage}>
                <div className={classes.wrapper}>
                    <ToPageLink page={AppRoute.Quiz}/>
                    <button className={classes.update} onClick={() => navigate(AppRoute.Quiz, {state: location.pathname})}>
                        Другой вопрос
                    </button>
                </div>
                <h2 className={classes.heading}>{result}</h2>
                <p className={classes.answer}>{answer}</p>
                <img className={classes.image} src={result.includes('Не совсем так') ? WrongAnswImg : RightAnswImg} alt="декоративное изображение"/>
                {article_id &&
                    <button
                        className={classes.article}
                        onClick={() => navigate(`/article/${article_id}`, {state: location.pathname})}>
                    Статья с ответом на вопрос
                    </button>
                }
            </section>
        </CustomContainer>
    );
};

