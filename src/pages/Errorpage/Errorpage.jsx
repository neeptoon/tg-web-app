import {useLocation, useNavigate} from 'react-router-dom';

import {tg} from '../hooks/useTelegram';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {PrimaryHeading} from '../../components/UI/PrimaryHeading';
import Warning from '../../assets/images/warning.png';
import {ReactComponent as BackArrow} from '../../assets/images/back-arrow.svg';
import {ERROR_MESSAGE} from '../../const';

import classes from './Errorpage.module.scss';


export const Errorpage = ({status}) => {
    console.log('INITDATA', tg.initData);
    const navigate = useNavigate();
    const location = useLocation();

    const handleCLick = () => {
        navigate('/');
    };

    return (
        <CustomContainer>
            <section className={classes.errorpage}>
                <BackArrow className={classes.button} onClick={handleCLick}/>
                {`INITDATA is ${tg.initData}`}
                <PrimaryHeading>{location.state || status}</PrimaryHeading>
                <p className={classes.message}>{ERROR_MESSAGE[location.state] ||ERROR_MESSAGE[status]}</p>
                <img src={Warning} alt="Декоративное изображение"/></section>
        </CustomContainer>
    );
};
