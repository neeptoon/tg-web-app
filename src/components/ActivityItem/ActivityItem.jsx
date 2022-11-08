import {Link} from 'react-router-dom';

import {ReactComponent as Arrow} from '../../images/right-arrow.svg';

import classes from './ActivityItem.module.scss';

export const ActivityItem = ({title}) => {
    return (
        <li className={classes.item}>
            <Link className={classes.link} to="/">
                <span>{title}</span>
                <Arrow className={classes.arrow}/>
            </Link>

        </li>
    );
};
