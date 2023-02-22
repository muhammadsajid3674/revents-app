import React from 'react'
import moment from 'moment'
import { Paper, Stack, Typography } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';

const UserDescription = ({ profile }) => {

    let memberSince;
    if (profile.createdAt) {
        let createdAt = profile.createdAt.toDate();
        memberSince = moment(createdAt, "YYYY MMM D").fromNow();
    }
    return (
        <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
                <DescriptionIcon fontSize='large' />
                <Typography variant='h5'>About {profile.displayName}</Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography variant='body1'>I am a: <span style={{ fontWeight: 600 }}>{profile.occupation}</span></Typography>
                <Typography variant='body1'>Originally From: <span style={{ fontWeight: 600 }}>{profile.origin}</span></Typography>
                <Typography variant='body1'>Account Created: <span style={{ fontWeight: 600 }}>{memberSince}</span></Typography>
                <Typography variant='body1'>{profile.about}</Typography>
            </Stack>
        </Paper>
    )
}

export default UserDescription