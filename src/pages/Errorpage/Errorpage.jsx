import {useLocation, useNavigate} from 'react-router-dom';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {PrimaryHeading} from '../../components/UI/PrimaryHeading';
import Warning from '../../assets/images/warning.png';
import {ReactComponent as BackArrow} from '../../assets/images/back-arrow.svg';
import {AppRoute, ERROR_MESSAGE} from '../../const';

import classes from './Errorpage.module.scss';

export const Errorpage = ({status}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCLick = () => {
        navigate(AppRoute.Root);
    };

    return (
        <CustomContainer>
            <section className={classes.errorpage}>
                <BackArrow className={classes.button} onClick={handleCLick}/>
                <PrimaryHeading>{location.state || status}</PrimaryHeading>
                <p className={classes.message}>{ERROR_MESSAGE[location.state] ||ERROR_MESSAGE[status]}</p>
                <img src={Warning} alt="Декоративное изображение"/></section>
        </CustomContainer>
    );
};
