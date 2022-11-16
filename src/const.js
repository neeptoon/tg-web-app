export const AppRoute = {
    Root: '/',
    Quiz: '/quiz',
    Article: '/article',
    SingleArticle: '/article/:id',
    Final: '/final',
    Error: '*'
};

export const ERROR_MESSAGE = {
    401: 'У вас нет прав для посещения\n' +
        'этого раздела.',
    404: 'Страница не найдена.',
    500: 'Внутренняя ошибка сервера'
};

export const ACTION = {
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    SET_ANSWER: 'SET_ANSWER'
};
