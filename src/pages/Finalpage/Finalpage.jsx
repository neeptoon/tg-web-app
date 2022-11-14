import {useLocation, useNavigate} from 'react-router-dom';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {AppRoute} from '../../const';

import {getFinalResults} from '../../helpers';

import classes from './Finalpage.module.scss';


export const Finalpage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {answer, article_id, userAnswer, correct} = state;

    const result = getFinalResults(correct, userAnswer);

    return (
        <CustomContainer>
            <section className={classes.finalpage}>
                <div className={classes.wrapper}>
                    <ToPageLink page={AppRoute.Quiz}/>
                    <button className={classes.update} onClick={() => navigate(AppRoute.Quiz)}>
                        Другой вопрос
                    </button>
                </div>
                <h2 className={classes.heading}>{result.title}</h2>
                <p className={classes.answer}>{answer}</p>
                <img className={classes.image} src={result.image} alt="декоративное изображение"/>
                {article_id &&
                    <button
                        className={classes.article}
                        onClick={() => navigate(`/article/${article_id}`)}>
                    Статья с ответом на вопрос
                    </button>
                }
            </section>
        </CustomContainer>
    );
};

