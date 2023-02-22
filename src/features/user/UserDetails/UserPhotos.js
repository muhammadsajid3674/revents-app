import React from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const UserPhotos = ({ photos }) => {
    return (
        <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
                <InsertPhotoIcon fontSize='large' />
                <Typography variant='h5'>Photos</Typography>
            </Stack>
            <Grid container spacing={1}>
                {photos && photos.length > 0 ? photos.map(e => {
                    return <Grid key={e.id} item md={3}>
                        <img src={e.url} style={{ width: '100%', minHeight: 'auto' }} alt='' />
                    </Grid>
                }) : null}
            </Grid>
        </Paper>
    )
}

export default UserPhotos