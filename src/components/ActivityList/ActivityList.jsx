import {ActivityItem} from '../ActivityItem';

import classes from './ActivityList.module.scss';


export const ActivityList = ({activities}) => {
    return (
        <ul className={classes.list}>
            {activities.map((activity, index) => <ActivityItem key={index} title={activity}/>) }
        </ul>
    );
};
