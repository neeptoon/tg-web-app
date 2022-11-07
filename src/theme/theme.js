import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#731982'
        }
    },
    components: {
        //override CSSBaseline style
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'Source Sans Pro, sans-serif',
                    'backgroundColor': '#EFEFEF'
                }
            }
        }
    },
});
