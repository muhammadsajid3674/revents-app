import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const UserFriends = ({followers, following}) => {
    return (
        <Paper sx={{ padding: '10px 15px' }}>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='h6'>{followers && followers.length}</Typography>
                        <Typography variant='h6'>Followers</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='h6'>{following && following.length}</Typography>
                        <Typography variant='h6'>Following</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default UserFriends