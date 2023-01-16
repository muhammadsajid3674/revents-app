import * as React from 'react';
import { styled } from '@mui/material/styles';
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

const PriButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#4b6cb7",
    fontWeight: 600,
    color: '#fff',
    border: '1px solid #4b6cb7',
    '&:hover': {
        transition: "500ms all",
        backgroundColor: "#182848",
        color: '#fff',
        border: '1px solid #182848',
    },
}));

export function ThemeBtnSec(props) {

    const { label, onClick, variant, className } = props;

    return (
        <SecButton variant={variant ?? 'outlined'} onClick={onClick} className={className}>{label}</SecButton>
    );
}
export function ThemeBtnPri(props) {

    const { label, onClick, variant, className } = props;

    return (
        <PriButton variant={variant ?? 'outlined'} onClick={onClick} className={className}>{label}</PriButton>
    );
}
export function ThemeBtnHome(props) {

    const { label, onClick, className } = props;

    return (
        <button class="learn-more" onClick={onClick}>
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">{label}</span>
        </button>
    );
}