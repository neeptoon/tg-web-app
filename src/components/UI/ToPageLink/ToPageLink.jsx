import {Link} from 'react-router-dom';

import {ReactComponent as BackArrow} from '../../../images/back-arrow.svg';

import classes from './ToPageLink.module.scss';

export const ToPageLink = ({page}) => {
    return (
        <Link className={classes.link} to={page}>
            <BackArrow/>
        </Link>
    );
};

