import { useLocation, useNavigate} from 'react-router-dom';

import {ReactComponent as BackArrow} from '../../../assets/images/back-arrow.svg';

import classes from './ToPageLink.module.scss';

export const ToPageLink = ({page, articleName}) => {
    const location = useLocation();
    const navigation = useNavigate();
    return (
        <button
            className={classes.link}
            onClick={() => navigation(page, {state: articleName || location.pathname})}
        >
            <BackArrow/>
        </button>
    );
};

