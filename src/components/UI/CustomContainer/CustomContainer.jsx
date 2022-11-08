import {Container} from '@mui/material';

export const CustomContainer = ({children}) => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',
        }}>
            {children}
        </Container>
    );
};

