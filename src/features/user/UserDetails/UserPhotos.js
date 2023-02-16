import { Grid } from '@mui/material'
import React from 'react'

const UserPhotos = ({ photos }) => {
    return (
        <Grid container spacing={1}>
            {photos && photos.length > 0 ? photos.map((e, i) => {
                return <Grid item md={3}>
                    <img src={e.url} style={{ width: '100%', minHeight: 'auto' }} alt='' />
                </Grid>
            }) : null}
        </Grid>
    )
}

export default UserPhotos