import { Stack } from '@mui/material'
import React from 'react'
import { ThemeBtnSec } from '../../components/button/ThemeBtn'


export const SignOutMenu = (props) => {
    return (
        <Stack spacing={1} direction="row">
                <ThemeBtnSec onClick={props.signIn} variant="standard" color='light' label='Log in'/>
                <ThemeBtnSec variant="standard" color='light' label='Register'/>
        </Stack>
    )
}
