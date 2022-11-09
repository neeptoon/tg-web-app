import {Link} from 'react-router-dom';

import {ReactComponent as BackArrow} from '../../../images/back-arrow.svg';

import classes from './ToHomeButton.module.scss';

export const ToHomeButton = () => {
    return (
        <Link className={classes.link} to="/">
            <BackArrow/>
        </Link>
    );
};

