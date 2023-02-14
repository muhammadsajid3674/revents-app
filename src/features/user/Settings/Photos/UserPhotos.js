import React from 'react'
import { Button, Card, CardActions, CardMedia, Typography, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import brokenImage from '../../../../assets/user.png';

const UserPhotos = ({ photos, profile }) => {
    let filteredPhotos;
    if (photos) {
        filteredPhotos = photos.filter((e, i) => {
            return e.url !== profile.photoURL
        })
    }
    return (
        <>
            <Typography variant='body1' sx={{ fontWeight: 600, color: '#182848', marginBottom: '.5rem' }}>All Photos</Typography>
            <Stack direction='row' spacing={3}>
                <Card sx={{ maxWidth: 180 }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={profile.photoURL}
                    />
                    <CardActions sx={{ backgroundColor: '#00a152', justifyContent: 'center', }} >
                        <Typography variant='body1' sx={{ color: '#fff', fontWeight: 600, padding: '4px 0' }}>Main Photo</Typography>
                    </CardActions>
                </Card>
                {filteredPhotos && filteredPhotos.length > 0 ? filteredPhotos.map((e, i) => {
                    return <Card key={i} sx={{ maxWidth: 180 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={e.url}
                        />
                        <CardActions sx={{ justifyContent: 'space-between' }} >
                            <Button size="small" color='success' sx={{ fontWeight: 600 }}>Main</Button>
                            <Button size="small" color='error'><DeleteIcon /></Button>
                        </CardActions>
                    </Card>
                }) : null}
            </Stack>
        </>
    )
}

export default UserPhotos