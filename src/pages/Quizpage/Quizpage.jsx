import {useEffect, useState} from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

import {CustomSlider} from '../../components/CustomSlider';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {IntuitionService} from '../../services/intuition';
import {Loader} from '../../components/UI/Loader';

import {AppRoute, pathToPage} from '../../const';

import {analyticService} from '../../services/analytics';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [fetchQuestion, isLoading] = useFetching(async () => {
        const response = await IntuitionService.getQuestion();
        setCurrentQuestion(response);
    });
    const {id} = currentQuestion;
    const location = useLocation();


    useEffect(() => {
        fetchQuestion();
        analyticService.sendUserMove({source: pathToPage[location.state], target: pathToPage[location.pathname]});
    }, []);

    const onAnswer = (userAnswer) => {
        if(currentQuestion.id) {
            IntuitionService.sendAnswer(id, userAnswer).then(res => navigate(AppRoute.Final, {state: {answer: res.data}}));
        }
    };

    return (
        <CustomContainer>
            <section className={classes.page}>
                {isLoading
                    ? <Loader/>
                    : <>
                        <ToPageLink page={AppRoute.Root}/>
                        <h2 className={classes.heading}>Проверь <br/> интуицию!</h2>
                        {currentQuestion.id &&
                            <>
                                <p className={classes.lead}>{currentQuestion.question}</p>
                                <CustomSlider
                                    onAnswer={onAnswer}
                                    question={currentQuestion}
                                    fetchQuestion={fetchQuestion}
                                />
                            </>
                        }
                    </>
                }
            </section>
        </CustomContainer>
    );
};
