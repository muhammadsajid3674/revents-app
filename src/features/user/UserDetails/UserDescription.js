import { Stack, Typography } from '@mui/material'
import React from 'react'

const UserDescription = () => {
    return (
        <Stack spacing={1}>
            <Typography variant='body1'>I am a: <span style={{ fontWeight: 600 }}>Web Developer</span></Typography>
            <Typography variant='body1'>Originally From: <span style={{ fontWeight: 600 }}>UK</span></Typography>
            <Typography variant='body1'>Member Since: <span style={{ fontWeight: 600 }}>10 March 2018</span></Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Stack>
    )
}

export default UserDescription