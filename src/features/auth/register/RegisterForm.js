import { Alert, Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'
import { registerUser, socialLogin } from '../authActions';
import { combineValidators, isRequired } from 'revalidate';
import SocialLogin from '../SocialLogin/SocialLogin'

const validate = combineValidators({
    displayName: isRequired('display Name'),
    email: isRequired('email'),
    password: isRequired('password')
});

const RegisterForm = ({ handleSubmit, registerUser, error, invalid, submitting, elementName, loading, socialLogin }) => {
    return (
        <Box>
            <Box sx={{ padding: '10px 20px' }}>
                <Typography variant='h5'>Register to REVENTS</Typography>
            </Box>
            <Box sx={{ borderBottom: '1px solid #bbb' }}></Box>
            <Box component='form' sx={{ p: 3 }}>
                <Stack>
                    <Field type='text' name='displayName' component={TextInput} placeholder='Email Address' />
                    <Field type='email' name='email' component={TextInput} placeholder='Email Address' />
                    <Field type='password' name='password' component={TextInput} placeholder='Password' />
                    {error && <Alert severity="error">{error}</Alert>}
                    <ThemeBtnPri disabled={invalid || submitting} isLoading={loading} label='Register' onClick={handleSubmit(registerUser)} />
                    <Divider sx={{ marginTop: 1 }}>OR</Divider>
                    <SocialLogin socialLogin={socialLogin} />
                </Stack>
            </Box>
        </Box >
    )
}

const mapStateToProps = (state) => ({
    elementName: state.async.elementName,
    loading: state.async.loading,
})

const mapDispatchToProps = {
    registerUser,
    socialLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'RegisterForm', validate })(RegisterForm)); 