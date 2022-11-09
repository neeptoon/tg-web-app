import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import {useState} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../images/right-arrow.svg';
import {ReactComponent as ExpandMore} from '../../images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../images/to-article-arrow.svg';

import classes from './NestedList.module.scss';

export function NestedList({list}) {
    const [open, setOpen] = useState({});

    const handleClick = (name) => {
        setOpen({...open, ...{[name]: !open[name]} });
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
                            {name}
                            {!open[name] ? <ExpandLess className={classes.mainIcon} /> : <ExpandMore className={classes.mainIcon} style={{transform: 'rotate(-90deg)'}}/>}
                        </p>

                        <Collapse in={Boolean(open[name])} timeout="auto" unmountOnExit >
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
