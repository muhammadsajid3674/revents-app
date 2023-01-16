import { Button, createTheme, Stack, ThemeProvider } from '@mui/material'
import React from 'react'

const lightTheme = createTheme({
    palette: {
        light: {
            main: '#fff',
            // contrastText: '#000',
        },
    },
});


export const SignOutMenu = (props) => {
    return (
        <Stack direction="row">
            <ThemeProvider theme={lightTheme}>
                <Button onClick={props.signIn} variant="standard" color='light'>Log in</Button>
                <Button variant="standard" color='light'>Register</Button>
            </ThemeProvider>
        </Stack>
    )
}
