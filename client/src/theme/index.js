import { createTheme } from '@mui/material';
import { purple, red } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import React from 'react'

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: red[900],
        },
        secondary: {
            main: purple[600],
        },
    },
    typography: {
        body1: {
            fontFamily: 'Dongle',
            fontSize: 25,
            '@media (min-width:600px)': {
                fontSize: 30,
            }
        },
        body2: {
            fontFamily: 'Dongle',
            fontStyle: 'italic',
            fontSize: 25,
        },
        h1: {
            fontFamily: 'Dongle',
            fontWeight: 500
        },
        h2: {
            fontFamily: 'Dongle'
        },
        h4: {
            fontFamily: 'Dongle'
        },
        h6: {
            fontFamily: 'Dongle',
            fontWeight: 500,
            fontSize: 35,
        },
        button: {
            fontFamily: 'Dongle',
            fontSize: 25
        },
    }
});

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme