import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../assets/images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../assets/images/to-article-arrow.svg';
import DefaultIcon from '../../assets/images/board-1.png';

import classes from './NestedList.module.scss';

export function NestedList({list, isExpanded, setExpanded}) {
    const location = useLocation();
    const navigate = useNavigate();

    const initOpenedItem = list.reduce((accum, current) => {
        accum[current.name] = false;
        return accum;
    }, {});
    
    const [openedItem, setOpenedItem] = useState(initOpenedItem);

    useEffect(() => {
        if (!Object.values(openedItem).includes(false)) {
            setExpanded(true);
        } else if (Object.values(openedItem).indexOf(true) === -1) {
            setExpanded(false);
        }
    }, [openedItem]);

    useEffect(() => {
        const newOpenedItem = list.reduce((accum, current) => {
            accum[current.name] = isExpanded;
            return accum;
        }, {});

        setOpenedItem(newOpenedItem);
    }, [isExpanded]);


    const handleClick = (name) => {
        setOpenedItem({...openedItem, ...{[name]: !openedItem[name]} });
    };

    return (
        <>
            {list.map((item) => {
                const {name, icon, articles} = item;
                return (
                    <List key={name} component="div" sx={{
                        padding: '0 0 8px 0',
                        borderBottom: '1px solid var(--primary-violet)'
                    }}>
                        <p className={classes.category} onClick={() => handleClick(name)}>
                            <img src={icon || DefaultIcon} alt="декоративное изображение иконки категории статей"/>
                            {name}
                            {!openedItem[name] ? <ExpandLess className={classes.mainIcon} /> : <ExpandLess className={[classes.mainIcon, classes['mainIcon--open']].join(' ')}/>}
                        </p>

                        <Collapse in={Boolean(openedItem[name])} timeout="auto" unmountOnExit >
                            {articles.map(item => {
                                const {id, name} = item;
                                return (
                                    <List key={id} component="div" sx={{padding: 0}}>
                                        <button
                                            className={classes.item}
                                            onClick={() => navigate(`/article/${id}`, {state: location.pathname})}
                                        >
                                            <p>{name}</p>
                                            <Arrow className={classes.secondIcon}/>
                                        </button>
                                    </List>
                                );
                            })}
                        </Collapse>
                    </List>
                );
            } )}
        </>

    );
}
