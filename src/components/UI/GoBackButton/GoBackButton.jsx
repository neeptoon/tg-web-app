import {useNavigate} from 'react-router-dom';

import {ReactComponent as BackArrow} from '../../../images/back-arrow.svg';

import classes from './GoBackButton.module.scss';

export const GoBackButton = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <button onClick={goBack} className={classes.backButton}>
            <span className="visually-hidden">вернуться на один шаг назад</span>
            <BackArrow/>
        </button>
    );
};
