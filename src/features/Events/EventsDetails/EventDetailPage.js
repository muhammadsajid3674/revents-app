import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import EventDetailedChat from './EventDetailedChat'
import { EventDetailedHeader } from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'

export const EventDetailPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Stack spacing={2}>
                    <EventDetailedHeader />
                    <EventDetailedInfo />
                    <EventDetailedChat />
                </Stack>
            </Grid>
            <Grid item md={4}>
                <EventDetailedSidebar />
            </Grid>
        </Grid>
    )
}
