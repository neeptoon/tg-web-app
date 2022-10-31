import React from 'react';

import classes from './Colors.module.scss';

export const Colors = () => {
    return (
        <div className={classes.colors}>
            <div className={classes.bg_color}><span>bg_color</span></div>
            <div className={classes.text_color}><span>text_color</span></div>
            <div className={classes.hint_color}><span>hint_color</span></div>
            <div className={classes.link_color}><span>link_color</span></div>
            <div className={classes.button_color}><span>button_color</span></div>
            <div className={classes.button_text_color}><span>button_text_color</span></div>
            <div className={classes.secondary_bg_color}><span>secondary_bg_color</span></div>

        </div>
    );
};
