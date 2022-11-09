import {useState} from 'react';

import {CustomSlider} from '../../components/CustomSlider';
import {ToHomeButton} from '../../components/UI/ToHomeButton';

import {CustomContainer} from '../../components/UI/CustomContainer';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {

    const answ = 35;

    const [value, setValue] = useState(answ);

    const handleChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <CustomContainer>
            <section className={classes.page}>
                <ToHomeButton></ToHomeButton>
                <h2 className={classes.heading}>Проверь <br/> интуицию!</h2>
                <p className={classes.lead}>как думаешь, сколько человек в сутки пользуются этим ботом?</p>
                <CustomSlider answ={Number(value)} handleChange={handleChange}/>
            </section>
        </CustomContainer>
    );
};
