import { createTheme } from "@mui/material";

export const themePalette = createTheme({
    palette: {
        themeOrange: {
            main: '#e63946',
            contrastText: '#fff',
        },
        themeGrey: {
            main: '#eee',
            contrastText: '#5f7d95',
        },
        themeDefault: {
            main: '#182848',
            contrastText: '#fff',
        },
        google: {
            main: '#ea4335',
            contrastText: '#fff',
        },
        facebook: {
            main: '#4267b3',
            contrastText: '#fff',
        },
        success: {
            main: '#00a152',
            contrastText: '#fff',
        }
    },
});