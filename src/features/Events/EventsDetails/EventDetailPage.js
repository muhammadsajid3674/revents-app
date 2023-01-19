import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { connect } from 'react-redux'
import EventDetailedChat from './EventDetailedChat'
import { EventDetailedHeader } from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'

const EventDetailPage = ({event}) => {
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Stack spacing={2}>
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />
                </Stack>
            </Grid>
            <Grid item md={4}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid>
        </Grid>
    )
}

const mapStateToProp = (state) => {
    let parts = window.location.pathname.split('/');
    let lastSegment = parts.pop() || parts.pop();

    let event = {};
    
    if (lastSegment && state.events.length > 0) {
        event = state.events.filter(event => event.id === lastSegment)[0]
    }

    return {
        event
    }
}

export default connect(mapStateToProp)(EventDetailPage);
