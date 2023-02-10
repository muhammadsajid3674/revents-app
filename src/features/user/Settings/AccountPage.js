import { Alert, Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import TextInput from '../../../components/ReduxForm/TextInput'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { combineValidators, composeValidators, isRequired, matchesField } from 'revalidate'

const validate = combineValidators({
  newPassword1: isRequired({ message: 'PLease enter a password' }),
  newPassword2: composeValidators(
    isRequired({ message: 'Please confirm your new password' }),
    matchesField('newPassword1')({ message: 'Password do not match' })
  )()
})

const AccountPage = ({ handleSubmit, error, invalid, submitting, changePassword, providerId }) => {
  return (
    <Paper>
      <Box style={{ padding: '10px 15px' }}>
        <Typography variant='h4'>Account</Typography>
        <Divider sx={{ margin: '10px 0' }} />

        {providerId && providerId === 'password' && <Box>
          <Typography variant='p' sx={{ fontWeight: 600 }}>CHANGE PASSWORD</Typography>
          <Typography variant='body2'>Use this form to update your account settings</Typography>
          <Box component='form'>
            <Grid container>
              <Grid item md={6}>
                <Field type='password' name='newPassword1' component={TextInput} placeholder='Enter Password' />
                <Field type='password' name='newPassword2' component={TextInput} placeholder='Confirm Password' />
                {error && <Alert severity="error">{error}</Alert>}
              </Grid>
            </Grid>
            <Divider sx={{ margin: '10px 0 0px 0' }} />
            <ThemeBtnPri disabled={invalid || submitting} color='success' label='Update Password' variant='contained' onClick={handleSubmit(changePassword)} />
          </Box>
        </Box>}

        {providerId && providerId === 'facebook.com' && <Box sx={{ marginTop: '10px' }}>
          <Typography variant='p' sx={{ fontWeight: 600 }}>FACEBOOK ACCOUNT</Typography>
          <Typography variant='body2'>Please visit Facebook to update your account settings</Typography>
          <ThemeBtnPri startIcon={<FacebookOutlinedIcon />} color='facebook' label='go to facebook' variant='contained' />
        </Box>}

        {providerId && providerId === 'google.com' && <Box sx={{ marginTop: '10px' }}>
          <Typography variant='p' sx={{ fontWeight: 600 }}>GOOGLE ACCOUNT</Typography>
          <Typography variant='body2'>Please visit google to update your account settings</Typography>
          <ThemeBtnPri startIcon={<GoogleIcon />} color='google' label='go to google' variant='contained' />
        </Box>}

      </Box>
    </Paper>
  )
}


export default reduxForm({ form: 'account', validate })(AccountPage);