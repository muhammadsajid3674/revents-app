import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack } from '@mui/material'
import React from 'react'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'

const SocialLogin = (props) => {
    return (
        <Stack>
            <ThemeBtnPri onClick={() => props.socialLogin('facebook')} startIcon={<FacebookOutlinedIcon />} color="facebook" label='login with Facebook' />
            <ThemeBtnPri onClick={() => props.socialLogin('google')} startIcon={<GoogleIcon />} color="google" label='login with Google' />
        </Stack>
    )
}

export default SocialLogin