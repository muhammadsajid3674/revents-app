import { Stack } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { ThemeBtnSec } from '../../components/button/ThemeBtn'
import { openModal } from '../Modals/ModalActions'


const SignOutMenu = (props) => {
    return (
        <Stack spacing={1} direction="row">
            <ThemeBtnSec onClick={() => props.openModal('LoginFormModal')} variant="standard" color='light' label='Log in' />
            <ThemeBtnSec onClick={() => props.openModal('RegisterFormModal')} variant="standard" color='light' label='Register' />
        </Stack>
    )
}

const mapDispatchToProps = {
    openModal
}

export default connect(null, mapDispatchToProps)(SignOutMenu)