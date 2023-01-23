import { Box, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'

const RegisterForm = () => {
    return (
        <Box>
            <Typography variant='h4'>Register to REVENTS</Typography>
            <Box component='form'>
                <Field type='text' name='name' component={TextInput} placeholder='Email Address' />
                <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                <Field type='password' name='password' component={TextInput} placeholder='Password' />
                <ThemeBtnPri label='Register'/>
            </Box>
        </Box>
    )
}

export default reduxForm({ form: 'RegisterForm' })(RegisterForm)