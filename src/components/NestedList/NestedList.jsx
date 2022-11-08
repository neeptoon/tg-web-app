import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import {useState} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../images/right-arrow.svg';
import {ReactComponent as ExpandMore} from '../../images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../images/to-article-arrow.svg';

export function NestedList({title}) {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: '100%',
            }}
            component="div"
        >
            <ListItemButton
                sx={{
                    color: 'var(--primary-violet)',
                    outline: '1px solid red'
                }}
                onClick={handleClick}
            >
                <ListItemText sx={{
                    '& 	.MuiListItemText-primary': {
                        fontSize: 14,
                        lineHeight: 1.1,
                        color: '#455154',
                        fontWeight: 'bold'
                    },
                }}
                primary={title}
                />
                {open ? <ExpandLess /> : <ExpandMore style={{transform: 'rotate(-90deg)'}}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <ListItemButton
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListItemText sx={{
                                '& 	.MuiListItemText-primary': {
                                    fontSize: 12,
                                    lineHeight: 1.1,
                                    color: '#455154',
                                    textDecoration: 'none'
                                },
                            }}
                            primary={'статья 1'}
                            />
                            <Arrow/>
                        </ListItemButton>
                    </Link>


                </List>
            </Collapse>
        </List>
    );
}
