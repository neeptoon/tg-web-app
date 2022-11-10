import {CustomContainer} from '../../components/UI/CustomContainer';
import {PrimaryHeading} from '../../components/UI/PrimaryHeading';

import Warning from '../../images/warning.png';
import {ToPageLink} from '../../components/UI/ToPageLink';

import classes from './NotFoundpage.module.scss';

export const Notfoundpage = () => {
    return (

        <CustomContainer >
            <section className={classes.page}>
                <ToPageLink page={'/'}/>
                <PrimaryHeading>404</PrimaryHeading>
                <p>Страница не найдена. <br/> Вернитесь назад.</p>
                <img src={Warning} alt="Декоративное изображение"/></section>
        </CustomContainer>
    );
};
