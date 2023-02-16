import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase'
import { useNavigate, useParams } from 'react-router-dom'
import { objectToArray } from '../../../config/common/HelperMethods/objectToArray'
import EventDetailedChat from './EventDetailedChat'
import { EventDetailedHeader } from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'

class Kero extends Component {

    async componentDidMount() {
        const { firestore, navigate, params } = this.props;
        let event = await firestore.get(`events/${params.id}`)
        if (!event.exists) {
            navigate('*')
        }
    }

    render() {
        const { event } = this.props;
        let attendees = event && event.attendees && objectToArray(event.attendees)
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
                    <EventDetailedSidebar attendees={attendees} />
                </Grid>
            </Grid>
        )
    }
}

// Render Class in Functional Component to use Hooks
function EventDetailPage(props) {
    let navigate = useNavigate();
    let params = useParams()
    return <Kero {...props} params={params} navigate={navigate} />
}


const mapStateToProp = (state) => {
    let parts = window.location.pathname.split('/');
    let lastSegment = parts.pop() || parts.pop();

    let event = {};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0) {
        event = state.firestore.ordered.events.filter(event => event.id === lastSegment)[0] || {}
    }

    return {
        event
    }
}

export default withFirestore(connect(mapStateToProp)(EventDetailPage));
