import { Box, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'

const RegisterForm = () => {
    return (
        <Box>
            <Box sx={{ padding: '10px 20px' }}>
                <Typography variant='h5'>Register to REVENTS</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #bbb' }}></Box>
            <Box component='form' sx={{ p: 3 }}>
                <Field type='text' name='name' component={TextInput} placeholder='Email Address' />
                <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                <Field type='password' name='password' component={TextInput} placeholder='Password' />
                <ThemeBtnPri label='Register' />
            </Box>
        </Box >
    )
}

export default reduxForm({ form: 'RegisterForm' })(RegisterForm)