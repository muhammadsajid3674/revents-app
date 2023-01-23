import { Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ThemeBtnSec } from '../../components/button/ThemeBtn'
import { openModal } from '../Modals/ModalActions'


export const SignOutMenu = (props) => {
    const dispatch = useDispatch()
    return (
        <Stack spacing={1} direction="row">
            <ThemeBtnSec onClick={() => dispatch(openModal('LoginFormModal'))} variant="standard" color='light' label='Log in' />
            <ThemeBtnSec onClick={() => dispatch(openModal('RegisterFormModal'))} variant="standard" color='light' label='Register' />
        </Stack>
    )
}
