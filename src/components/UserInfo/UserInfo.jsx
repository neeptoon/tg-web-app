import React from 'react';

import {PrimaryHeading} from '../UI/PrimaryHeading';

import classes from './UserInfo.module.scss';


export const UserInfo = ({user}) => {
    return (
        <>
            <PrimaryHeading>Привет, {user.firstName}!</PrimaryHeading>
            <p className={classes.dayInfo}>{user.stageMessage}</p>
        </>
    );
};
