import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './themeBtn.css'
import { CircularProgress } from '@mui/material';

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
export function ThemeBtnSec(props) {

    const { label, onClick, variant, className, style } = props;

    return (
        <SecButton variant={variant ?? 'outlined'} onClick={onClick} className={className} sx={style}>{label}</SecButton>
    );
}
export function ThemeBtnPri(props) {

    const { label, onClick, variant, className, disabled, color, isLoading, startIcon } = props;

    return (
        <ThemeProvider theme={theme}>
            <Button disabled={disabled ?? isLoading} variant={variant ?? 'contained'} color={color ?? 'themeDefault'} startIcon={startIcon} onClick={onClick} className={className} style={{ fontWeight: 600 }}>
                {isLoading ? <CircularProgress size={24} sx={{ color: '#182848' }} /> : label}
            </Button>
        </ThemeProvider>
    );
}
export function ThemeBtnHome(props) {

    const { label, onClick } = props;

    return (
        <button className="learn-more" onClick={onClick}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{label}</span>
        </button>
    );
}