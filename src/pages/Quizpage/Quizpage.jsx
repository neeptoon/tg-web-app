import {useEffect, useState} from 'react';

import {CustomSlider} from '../../components/CustomSlider';
import {ToPageLink} from '../../components/UI/ToPageLink';
import {CustomContainer} from '../../components/UI/CustomContainer';
import {getMarksSlider} from '../../helpers';
import {useFetching} from '../../hooks/useFetching';
import {IntuitionService} from '../../API/intuition';
import {Loader} from '../../components/UI/Loader';
import {ErrorAlert} from '../../components/UI/ErrorAlert';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {
    const [quest, setQuestion] = useState(null);
    const [changeQuestion, setChangeQuestion] = useState(false);
    const [fetchQuestion, isLoading, questionError] = useFetching(async () => {
        const response = await IntuitionService.getQuestion();
        setQuestion(response);
    });

    useEffect(() => {
        fetchQuestion();
    }, [changeQuestion]);

    const [value, setValue] = useState(0);

    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    const handleChangeQuestion = () => {
        setChangeQuestion(!changeQuestion);
    };

    return (
        <CustomContainer>
            <section className={classes.page}>
                {isLoading
                    ? <Loader/>
                    : questionError
                        ? <ErrorAlert message={questionError}/>
                        : <>
                            <ToPageLink page={'/'}/>
                            <h2 className={classes.heading}>Проверь <br/> интуицию!</h2>
                            {quest &&
                                <>
                                    <p className={classes.lead}>{quest.question}</p>
                                    <CustomSlider
                                        value={Number(value)}
                                        // value={Math.floor(Math.random() * quest.max)}
                                        handleChange={handleChange}
                                        handleChangeQuestion={handleChangeQuestion}
                                        maxValue={quest.max}
                                        marks={getMarksSlider(quest.min, quest.max)}
                                    />
                                </>
                            }
                        </>
                }

            </section>
        </CustomContainer>
    );
};
