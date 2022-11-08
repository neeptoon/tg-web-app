import {Link} from 'react-router-dom';

import {ReactComponent as Arrow} from '../../images/right-arrow.svg';

import classes from './MainNav.module.scss';

export const MainNav = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <Link className={[classes.link, classes['link--articles']].join(' ')} to={'/article'}>
                        Статьи
                        <Arrow className={classes.arrow}/>
                    </Link>

                </li>
                <li className={classes.item}>
                    <Link className={[classes.link, classes['link--intuition']].join(' ')} to={'/quiz'}>
                        Проверь интуицию
                        <Arrow className={classes.arrow}/>
                    </Link>

                </li>
            </ul>


        </nav>
    );
};

