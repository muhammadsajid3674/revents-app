import { Alert, Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'
import { login } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin'

const validate = combineValidators({
    displayName: isRequired('display Name'),
    email: isRequired('email'),
    password: isRequired('password')
});

const LoginForm = ({ login, handleSubmit, error, invalid, submitting }) => {
    return (
        <Box>
            <Box sx={{ padding: '10px 20px' }}>
                <Typography variant='h5'>Login to REVENTS</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #bbb' }}></Box>
            <Box component='form' sx={{ p: 3 }}>
                <Stack>
                    <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                    <Field type='password' name='password' component={TextInput} placeholder='Password' />
                    {error && <Alert severity="error">{error}</Alert>}
                    <ThemeBtnPri disabled={invalid || submitting} label='Login' variant='contained' onClick={handleSubmit(login)} />
                    <Divider sx={{marginTop: 1}}>OR</Divider>
                    <SocialLogin />
                </Stack>
            </Box>
        </Box>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'loginForm', validate })(LoginForm))