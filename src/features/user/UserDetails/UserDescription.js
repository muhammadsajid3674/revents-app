import { Stack, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'

const UserDescription = ({ profile }) => {

    let memberSince;
    if (profile.createdAt) {
        let createdAt = profile.createdAt.toDate();
        memberSince = moment(createdAt, "YYYY MMM D").fromNow();
    }
    return (
        <Stack spacing={1}>
            <Typography variant='body1'>I am a: <span style={{ fontWeight: 600 }}>{profile.occupation}</span></Typography>
            <Typography variant='body1'>Originally From: <span style={{ fontWeight: 600 }}>{profile.origin}</span></Typography>
            <Typography variant='body1'>Account Created: <span style={{ fontWeight: 600 }}>{memberSince}</span></Typography>
            <Typography variant='body1'>{profile.about}</Typography>
        </Stack>
    )
}

export default UserDescription