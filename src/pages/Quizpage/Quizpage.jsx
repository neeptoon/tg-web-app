import {useState} from 'react';

import {CustomSlider} from '../../components/CustomSlider';
import {ToPageLink} from '../../components/UI/ToPageLink';

import {CustomContainer} from '../../components/UI/CustomContainer';

import {getMarksSlider} from '../../helpers';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {
    const LOW = 20;
    const answ = 35;
    const HIGH = 150;

    const [value, setValue] = useState(answ);

    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <CustomContainer>
            <section className={classes.page}>
                <ToPageLink page={'/'}/>
                <h2 className={classes.heading}>Проверь <br/> интуицию!</h2>
                <p className={classes.lead}>как думаешь, сколько человек в сутки пользуются этим ботом?</p>
                <CustomSlider
                    answ={Number(value)}
                    handleChange={handleChange}
                    maxValue={HIGH}
                    marks={getMarksSlider(LOW, HIGH)}
                />
            </section>
        </CustomContainer>
    );
};
