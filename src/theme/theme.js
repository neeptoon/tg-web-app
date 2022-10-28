import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    components: {
        //override CSSBaseline style
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'Source Sans Pro, sans-serif',
                }
            }
        }
    },
});
