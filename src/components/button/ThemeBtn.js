import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './themeBtn.css'
import { CircularProgress } from '@mui/material';
import { themePalette } from '../../config/common/Theme/ThemePalette';

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
        <SecButton variant={variant ?? 'outlined'} onClick={onClick} className={className} sx={style}>{label}</SecButton>
    );
}
export function ThemeBtnPri(props) {

    const { label, onClick, variant, className, disabled, color, isLoading, startIcon, size } = props;

    return (
        <ThemeProvider theme={themePalette}>
            <Button disabled={disabled ?? isLoading} variant={variant ?? 'contained'} color={color ?? 'themeDefault'} size={size} startIcon={startIcon} onClick={onClick} className={className} style={{ fontWeight: 600 }}>
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