import React from 'react';

import {PrimaryHeading} from '../UI/PrimaryHeading';

import {index} from '../../helpers';

import classes from './UserInfo.module.scss';


export const UserInfo = ({userName, activities = 5, unreadArticles}) => {
    return (
        <>
            <PrimaryHeading>Привет, {userName}!</PrimaryHeading>
            <p className={classes.dayInfo}>Сегодня твой третий день обучения</p>
            <p className={classes.activitiesInfo}>У тебя <span>{activities}</span> {index(activities)}:</p>
        </>
    );
};
