import { Box, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'
import { login } from '../authActions';


const LoginForm = ({ login, handleSubmit }) => {
    return (
        <Box>
            <Box sx={{ padding: '10px 20px' }}>
                <Typography variant='h5'>Login to REVENTS</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #bbb' }}></Box>
            <Box component='form' sx={{ p: 3 }}>
                <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                <Field type='password' name='password' component={TextInput} placeholder='Password' />
                <ThemeBtnPri label='Login' variant='contained' onClick={handleSubmit(login)} />
            </Box>
        </Box>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'loginForm' })(LoginForm))