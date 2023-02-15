import React from 'react'
import { Button, Card, CardActions, CardMedia, Typography, Stack, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import brokenImage from '../../../../assets/user.png';

const UserPhotos = ({ photo, profile, deleteImage, setMainProfile }) => {
    let filteredPhotos;
    if (photo) {
        filteredPhotos = photo.filter((e, i) => {
            return e.url !== profile.photoURL
        })
    }
    return (
        <>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848', marginBottom: '.5rem' }}>All Photos</Typography>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Card sx={{ maxWidth: 180 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={profile.photoURL || brokenImage}
                        />
                        <CardActions sx={{ backgroundColor: '#00a152', justifyContent: 'center', }} >
                            <Typography variant='body1' sx={{ color: '#fff', fontWeight: 600, padding: '4px 0' }}>Main Photo</Typography>
                        </CardActions>
                    </Card>
                </Grid>

                {filteredPhotos && filteredPhotos.length > 0 ? filteredPhotos.map((e, i) => {
                    return <Grid item md={3} key={i}>
                        <Card sx={{ maxWidth: 180 }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={e.url}
                            />
                            <CardActions sx={{ justifyContent: 'space-between' }} >
                                <Button size="small" color='success' sx={{ fontWeight: 600 }} onClick={() => setMainProfile(e)}>Main</Button>
                                <Button size="small" color='error' onClick={() => deleteImage(e)}><DeleteIcon /></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                }) : null}
            </Grid>
        </>
    )
}

export default UserPhotos