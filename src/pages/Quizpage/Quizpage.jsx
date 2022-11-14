import {useEffect, useState} from 'react';

import {CustomSlider} from '../../components/CustomSlider';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {CustomContainer} from '../../components/UI/CustomContainer';
import {useFetching} from '../../hooks/useFetching';
import {IntuitionService} from '../../services/intuition';
import {Loader} from '../../components/UI/Loader';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answerValue, setAnswerValue] = useState(null);
    const [fetchQuestion, isLoading] = useFetching(async () => {
        const response = await IntuitionService.getQuestion();
        setCurrentQuestion(response);
    });

    useEffect(() => {
        fetchQuestion();
    }, []);

    const onAnswer = (answer) => {
        setAnswerValue(answer);
    };


    return (
        <CustomContainer>
            <section className={classes.page}>
                {isLoading
                    ? <Loader/>
                    : <>
                        <ToPageLink page={'/'}/>
                        <h2 className={classes.heading}>Проверь <br/> интуицию!</h2>
                        {currentQuestion &&
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
