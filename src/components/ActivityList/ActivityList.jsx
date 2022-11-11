import React from 'react';

import {ActivityItem} from '../ActivityItem';

import {index} from '../../helpers';

import classes from './ActivityList.module.scss';


export const ActivityList = ({newArticles}) => {

    return (
        <>
            {newArticles.length > 0 &&
                <p className={classes.activitiesInfo}>
                    У тебя <span>{newArticles.length}</span> {index(newArticles.length)}:
                </p>
            }

            <ul className={classes.list}>
                {newArticles.map(article => <ActivityItem key={article.id} title={article.name}/>) }
            </ul>
        </>

    );
};
