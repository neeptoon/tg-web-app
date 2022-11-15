import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';

import {CustomContainer} from '../../components/UI/CustomContainer';
import {PrimaryHeading} from '../../components/UI/PrimaryHeading';
import Warning from '../../assets/images/warning.png';
import {ReactComponent as BackArrow} from '../../assets/images/back-arrow.svg';
import {AppContext} from '../../context';
import {ERROR_MESSAGE} from '../../const';

import classes from './Errorpage.module.scss';


export const Errorpage = ({code}) => {
    const navigate = useNavigate();
    const {clearError} = useContext(AppContext);

    const handleCLick = () => {
        navigate('/');
        clearError();
    };


    return (
        <CustomContainer>
            <section className={classes.errorpage}>
                <BackArrow className={classes.button} onClick={handleCLick}/>
                <PrimaryHeading>{code}</PrimaryHeading>
                <p className={classes.message}>{ERROR_MESSAGE[code]}</p>
                <img src={Warning} alt="Декоративное изображение"/></section>
        </CustomContainer>
    );
};
