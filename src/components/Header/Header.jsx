import React from 'react';

import Button from '../Button';

import {useTelegram} from '../../hooks/useTelegram';

import classes from './Header.module.scss';


const Header = () => {

    const [webAppClose, user] = useTelegram();

    return (
        <div className={classes.header}>
            <Button webAppClose={webAppClose}>закрыть</Button>
            <span className={classes.username}>{user?.username}</span>
        </div>
    );
};

export default Header;