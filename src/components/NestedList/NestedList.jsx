import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import {useLocation, useNavigate} from 'react-router-dom';

import {ReactComponent as ExpandLess} from '../../assets/images/right-arrow.svg';
import {ReactComponent as Arrow} from '../../assets/images/to-article-arrow.svg';
import DefaultIcon from '../../assets/images/board-1.png';

import classes from './NestedList.module.scss';

export function NestedList({articlesList, categoryClickHandler, currentOpenedItems}) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            {articlesList.map((item) => {
                const {name, icon, articles} = item;
                
                return (
                    <List key={name} component="div" sx={{
                        padding: '0 0 8px 0',
                        borderBottom: '1px solid var(--primary-violet)'
                    }}>
                        <p className={classes.category} onClick={() => categoryClickHandler(name)}>
                            <img src={icon || DefaultIcon} alt="декоративное изображение иконки категории статей"/>
                            {name}
                            {!currentOpenedItems[name] ?
                                <ExpandLess className={classes.mainIcon} /> :
                                <ExpandLess className={[classes.mainIcon, classes['mainIcon--open']].join(' ')}/>
                            }
                        </p>

                        <Collapse in={Boolean(currentOpenedItems[name])} timeout="auto" unmountOnExit >
                            {articles.map(item => {
                                const {id, name, read} = item;
                                const rootClass = [];
                                if(read) rootClass.push(classes.read);

                                return (
                                    <List key={id} component="div" sx={{padding: 0}}>
                                        <button
                                            className={classes.item}
                                            onClick={() => navigate(`/article/${id}`, {state: location.pathname})}
                                        >
                                            <p className={rootClass}>{name}</p>
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
