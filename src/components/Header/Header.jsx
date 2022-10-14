import React from 'react';

import {useTelegram} from '../../hooks/useTelegram';

import {Button} from '../Button';


import classes from './Header.module.scss';


export const Header = () => {

    const {webAppClose, user} = useTelegram();

    return (
        <div className={classes.header}>
            <Button webAppClose={webAppClose}>закрыть</Button>
            <span className={classes.username}>{user?.username}</span>
        </div>
    );
};

