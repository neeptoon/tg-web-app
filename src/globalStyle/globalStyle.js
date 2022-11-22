export const globalStyles = {
    'body': {
        'fontFamily': 'Open Sans, sans-serif',
        'fontWeight': 'bold',
        '--primary-violet': '#731982',
        '--primary-gray': '#455154',
        '--primary-green': '#00B944',
        '--secondary-violet': '#570F63',
        '--secondary-gray': '#E2E2E2',
        'padding': '0 calc(8px - (100vw - 100%)) 0 0',
    },
    '::-webkit-scrollbar': {
        'backgroundColor': 'var(--tg-theme-secondary-bg-color) !important',
        'width': '8px !important'
    },
    '::-webkit-scrollbar:hover': {
        'backgroundColor': 'var(--tg-theme-secondary-bg-color) !important',
    },
    'img': {
        'display': 'block',
        'maxWidth': '100%'
    },
    '.visually-hidden': {
        'position': 'absolute',
        'width': '1px',
        'height': '1px',
        'margin': '-1px',
        'border': 0,
        'padding': 0,
        'whiteSpace': 'nowrap',
        'clipPath': 'inset(100%)',
        'clip': 'rect(0 0 0 0)',
        'overflow': 'hidden',
    }
};

