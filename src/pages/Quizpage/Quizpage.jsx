import {useState} from 'react';

import {CustomSlider} from '../../components/CustomSlider';
import {ToHomeButton} from '../../components/UI/ToHomeButton';

import {CustomContainer} from '../../components/UI/CustomContainer';

import classes from './Quizpage.module.scss';

export const Quizpage = () => {
    const LOW = 20;
    const answ = 35;
    const HIGH = 150;

    function getMarksSlider(a, b) {
        const scales = [0, 12, 25, 37, 50, 63, 75, 87, 100];
        const result = [];

        scales.forEach((item, index) => {
            if (index === 0) {
                result.push({value: item, label: String(item)});
            } else  if (index === scales.length -1) {
                result.push({value: b, label: String(b)});
            } else  result.push({
                value: (Math.floor(b*item/100)), label: String(Math.floor(b*item/100))
            });
        });

        return result;
    }

    const marks = getMarksSlider(LOW, HIGH);

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
                <CustomSlider
                    answ={Number(value)}
                    handleChange={handleChange}
                    maxValue={HIGH}
                    marks={marks}
                />
            </section>
        </CustomContainer>
    );
};
