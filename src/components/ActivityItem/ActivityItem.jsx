import {Link} from 'react-router-dom';

import {ReactComponent as Arrow} from '../../assets/images/right-arrow.svg';

import classes from './ActivityItem.module.scss';

export const ActivityItem = ({id, name}) => {
    return (
        <li className={classes.item}>
            <Link className={classes.link} to={`/article/${id}`}>
                <span>{name}</span>
                <Arrow className={classes.arrow}/>
            </Link>

        </li>
    );
};
