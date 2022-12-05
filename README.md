# web app для телеграм бота Мегафон

[вики проекта в козаре](https://redmine.convergent.digital/projects/koz10162k10162/wiki)

## Установка и запуск
- `npm install`
- `npm start`
- версия node - 14

## Deploy
- ветка `master` - настроен автодеплой на прод
- ветка `develop` - настроен автодеплой на develop
##### не забудь провеирть `BASE_URL` в настройках `axios` при мердже веток 

## Инициализация webapp
[подключаем скрипт](https://core.telegram.org/bots/webapps#initializing-web-apps) в index.html в папке /public

## Получение токена
при подключении скрипта ☝ на глобальном уровне становится доступен объект `window.Telegram.WebApp` у которого есть поле `initData`, значение которого 
форматируется в Base64 и добавляется в заголовки `axios` при формировании запроса 

## REST
вся асинхроная работа строится с использованием `axios` в `src/services`
настройки `axios` в файле `src/services/config.js`

## Логирование перехода между страницами
В проекте используется `react-router`
При переходе между страницами необходимо передавать данные для логирования, поэтому переход между страницами реализован с помощью хука `useNavigate()` 

``` js 
export const ToPageLink = ({page, articleName}) => {
    const location = useLocation();
    const navigation = useNavigate();
    return (
        <button
            className={classes.link}
            onClick={() => navigation(page, {state: articleName || location.pathname})}
        >
            <BackArrow/>
        </button>
    );
};
```

на примере кнопки перехода между страницами: по клику вызывается `navigation` которая: 
- первым параметром принимает `page` - страницу, на которую должен 
произойти переход
- вторым объект с полем `state` который запишется в `location.state` той страницы, на котрую будет осуществлен переход

[видосик как это работает](https://www.youtube.com/watch?v=jv0ckzkKYzU&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE&index=5&t=242s) или почитай документацию

## Стилизация
на проекте используется библиотека `MUI` и те компоненты, которые есть на странице стилизуются с помощью `sx` пропа этих компонентов (это в первую очередь 
слайдер и выпадающий список), 
остальные - `css modules`