import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../assets/images/right-arrow.svg';
import {ReactComponent as ExpandMore} from '../../assets/images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../assets/images/to-article-arrow.svg';

import classes from './NestedList.module.scss';

export function NestedList({list, isExpanded}) {

    const initOpenedItem = list.reduce((accum, current) => {
        accum[current.name] = false;
        return accum;
    }, {});
    
    const [openedItem, setOpenedItem] = useState(initOpenedItem);

    const handleClick = (name) => {
        setOpenedItem({...openedItem, ...{[name]: !openedItem[name]} });
    };

    useEffect(() => {
        const newOpenedItem = list.reduce((accum, current) => {
            accum[current.name] = isExpanded;
            return accum;
        }, {});

        setOpenedItem(newOpenedItem);
    }, [isExpanded]);

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
                            {name}
                            {!openedItem[name] ? <ExpandLess className={classes.mainIcon} /> : <ExpandMore className={classes.mainIcon} style={{transform: 'rotate(-90deg)'}}/>}
                        </p>

                        <Collapse in={Boolean(openedItem[name])} timeout="auto" unmountOnExit >
                            {articles.map(item => {
                                const {id, name} = item;
                                return (
                                    <List key={id} component="div" sx={{padding: 0}}>

                                        <Link className={classes.item} to={`/article/${id}`}>
                                            <p>{name}</p>
                                            <Arrow className={classes.secondIcon}/>
                                        </Link>
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
