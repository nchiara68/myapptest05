import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // Green shade for primary color
        },
        secondary: {
            main: '#FFC107', // Amber shade for secondary color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h3: {
            fontWeight: 700,
        },
    },
});

export default theme;

