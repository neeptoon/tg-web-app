import React from 'react';

import PrimaryHeading from '../UI/PrimaryHeading/PrimaryHeading';

import classes from './UserInfo.module.scss';


const UserInfo = ({userName}) => {
    return (
        <>
            <PrimaryHeading content={userName}/>
            <p>Сегодня твой третий день обучения</p>
            <p>У тебя 2 новые активности:</p>


        </>
    );
};

export default UserInfo;