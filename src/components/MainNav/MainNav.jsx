import {Link, useLocation, useNavigate} from 'react-router-dom';

import {ReactComponent as Arrow} from '../../assets/images/right-arrow.svg';

import {AppRoute} from '../../const';

import classes from './MainNav.module.scss';

export const MainNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <button
                        className={[classes.link, classes['link--articles']].join(' ')}
                        onClick={() => navigate(AppRoute.Article, {state: location.pathname})}
                    >
                        Статьи
                        <Arrow className={classes.arrow}/>
                    </button>

                </li>
                <li className={classes.item}>
                    <button
                        className={[classes.link, classes['link--intuition']].join(' ')}
                        onClick={() => navigate(AppRoute.Quiz, {state: location.pathname})}
                    >
                        Проверь интуицию*
                        <Arrow className={classes.arrow}/>
                    </button>
                </li>
            </ul>

            <p className={classes.info}>* — Это фановая история, которая вас ни к чему не принуждает</p>


        </nav>
    );
};

