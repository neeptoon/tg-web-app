import React from 'react';

import PrimaryHeading from '../UI/PrimaryHeading/PrimaryHeading';

import {declin} from '../../helpers/declin';

import classes from './UserInfo.module.scss';


export const UserInfo = ({userName, activities = 5, unreadArticles}) => {
    return (
        <>
            <PrimaryHeading content={userName}/>
            <p className={classes.dayInfo}>Сегодня твой третий день обучения</p>
            <p className={classes.activitiesInfo}>У тебя <span>{activities}</span> {declin(activities)}:</p>
        </>
    );
};
