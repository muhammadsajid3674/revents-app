import { Box, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../components/ReduxForm/TextInput'

const LoginForm = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>Login to REVENTS</Typography>
            <Box component='form'>
                <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                <Field type='password' name='password' component={TextInput} placeholder='Password' />
            </Box>
        </Box>
    )
}

export default reduxForm({ form: 'loginForm' })(LoginForm)