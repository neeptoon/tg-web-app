import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from 'react';
import {Link} from 'react-router-dom';

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
                    backgroundColor: '#e0e0e0',
                    borderRadius: 2
                }}
                onClick={handleClick}
            >
                <ListItemText sx={{
                    '& 	.MuiListItemText-primary': {
                        fontWeight: 600,
                        fontSize: 22,
                        lineHeight: 1.2
                    },
                }}
                primary={title}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div">
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 1,
                            backgroundColor: '#e0e0e0',
                            borderRadius: 2
                        }}
                    >
                        <Link to={'/'}>Статья 1</Link>
                        <ChevronRightIcon/>
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 1,
                            backgroundColor: '#e0e0e0',
                            borderRadius: 2
                        }}
                    >
                        <Link to={'/'}>Статья 1</Link>
                        <ChevronRightIcon sx={{
                            color: 'red'
                        }}/>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
