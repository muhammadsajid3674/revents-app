import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './themeBtn.css'

const SecButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    fontWeight: 600,
    color: '#fff',
    border: '1px solid #fff',
    '&:hover': {
        transition: "500ms all",
        backgroundColor: "#fff",
        color: '#000',
        borderColor: '#fff',
    },
}));

export function ThemeBtnSec(props) {

    const { label, onClick, variant, className, style } = props;

    return (
        <SecButton variant={variant ?? 'outlined'} onClick={onClick} className={className} style={style}>{label}</SecButton>
    );
}
export function ThemeBtnPri(props) {
    const theme = createTheme({
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
        },
    });

    const { label, onClick, variant, className, disabled, color } = props;

    return (
        <ThemeProvider theme={theme}>
            <Button disabled={disabled} variant={variant ?? 'contained'} color={color ?? 'themeDefault'} onClick={onClick} className={className} style={{ fontWeight: 600 }}>{label}</Button>
        </ThemeProvider>
    );
}
export function ThemeBtnHome(props) {

    const { label, onClick, className } = props;

    return (
        <button className="learn-more" onClick={onClick}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{label}</span>
        </button>
    );
}