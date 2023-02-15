import { Grid } from '@mui/material'
import React from 'react'

const UserPhotos = () => {
    return (
        <Grid container spacing={1}>
            <Grid item md={3}>
                <img src='https://randomuser.me/api/portraits/men/20.jpg' style={{ width: '100%', minHeight: 'auto' }} alt='' />
            </Grid>
            <Grid item md={3}>
                <img src='https://randomuser.me/api/portraits/men/20.jpg' style={{ width: '100%', minHeight: 'auto' }} alt='' />
            </Grid>
            <Grid item md={3}>
                <img src='https://randomuser.me/api/portraits/men/20.jpg' style={{ width: '100%', minHeight: 'auto' }} alt='' />
            </Grid>
            <Grid item md={3}>
                <img src='https://randomuser.me/api/portraits/men/20.jpg' style={{ width: '100%', minHeight: 'auto' }} alt='' />
            </Grid>
        </Grid>
    )
}

export default UserPhotos