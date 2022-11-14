import {useLocation, useNavigate} from 'react-router-dom';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {AppRoute} from '../../const';

import {diffBtwNum} from '../../helpers';

import RightAnswImg from '../../assets/images/right-answer.png';
import WrongAnswImg from '../../assets/images/wrong-answer.png';

import classes from './Finalpage.module.scss';


export const Finalpage = ({}) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {answer, article_id, userAnswer, correct} = state;
    console.log(state);

    let image, title;

    const diff = diffBtwNum(correct, userAnswer);

    if(diff < 5) {
        image = RightAnswImg;
        title = <span>Почти <br/> правильно!</span>;
    }

    if(diff === 0) {
        image = RightAnswImg;
        title = <span>Совершенно <br/> точно!</span>;
    }

    if(diff > 5) {
        image = WrongAnswImg;
        title = 'Не совсем так!';
    }

    console.log(diff, image, title);

    return (
        <CustomContainer>
            <section className={classes.finalpage}>
                <div className={classes.wrapper}>
                    <ToPageLink page={AppRoute.Quiz}/>
                    <button className={classes.update} onClick={() => navigate(AppRoute.Quiz)}>
                        Другой вопрос
                    </button>
                </div>
                <h2 className={classes.heading}>{title}</h2>
                <p className={classes.answer}>{answer}</p>
                <img className={classes.image} src={image} alt="декоративное изображение"/>
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

