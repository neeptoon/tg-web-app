import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import {useState} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../images/right-arrow.svg';
import {ReactComponent as ExpandMore} from '../../images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../images/to-article-arrow.svg';

import classes from './NestedList.module.scss';

export function NestedList({
    title='Онбординг день 1'
}) {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="div" sx={{padding: '0 0 8px 0', borderBottom: '1px solid var(--primary-violet)'}}>
            <p className={classes.category} onClick={handleClick}>
                {title}
                {open ? <ExpandLess className={classes.mainIcon} /> : <ExpandMore className={classes.mainIcon} style={{transform: 'rotate(-90deg)'}}/>}
            </p>

            <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div" sx={{padding: 0}}>
                    <Link className={classes.item} to="/">
                        <p>Классификация продуктов Мегафон</p>
                        <Arrow className={classes.secondIcon}/>
                    </Link>
                </List>
                <List component="div" sx={{padding: 0}}>
                    <Link className={classes.item} to="/">
                        <p style={{display: 'inline-block'}}>Классификация продуктов Мегафон
                                                             в коллекции Мегафон для пользователей продуктов Мегафон</p>
                        <Arrow className={classes.secondIcon}/>
                    </Link>
                </List>
            </Collapse>
        </List>
    );
}
