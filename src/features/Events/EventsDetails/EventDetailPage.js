import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, withFirestore } from 'react-redux-firebase'
import { useNavigate, useParams } from 'react-router-dom'
import { objectToArray } from '../../../config/common/HelperMethods/objectToArray'
import EventDetailedChat from './EventDetailedChat'
import { EventDetailedHeader } from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import { goingToEvent, cancelGoingToEvent } from '../../user/userAction'
import { addEventComment } from '../EventActions'
import { compose } from 'redux'

class Kero extends Component {

    async componentDidMount() {
        const { firestore, params } = this.props;
        await firestore.setListener(`events/${params.id}`)
    }
    async componentDidUnMount() {
        const { firestore, params } = this.props;
        await firestore.unsetListener(`events/${params.id}`)
    }

    render() {
        const { event, auth, goingToEvent, cancelGoingToEvent, addEventComment, eventChat } = this.props;
        let attendees = event && event.attendees && objectToArray(event.attendees)
        const isHost = event.hostUid === auth.uid;
        const isGoing = attendees && attendees.some(a => a.id === auth.uid);
        return (
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Stack spacing={2}>
                        <EventDetailedHeader event={event} isHost={isHost} isGoing={isGoing} goingToEvent={goingToEvent} cancelGoingToEvent={cancelGoingToEvent} />
                        <EventDetailedInfo event={event} />
                        <EventDetailedChat addEventComment={addEventComment} eventId={event.id} eventChat={eventChat} />
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

// To get ID from path
let parts = window.location.pathname.split('/');
let pathId = parts.pop() || parts.pop();

const mapStateToProp = (state) => {

    let event = {};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0) {
        event = state.firestore.ordered.events.filter(event => event.id === pathId)[0] || {}
    }

    return {
        event,
        auth: state.firebase.auth,
        eventChat: !isEmpty(state.firebase.data.event_chat) && objectToArray(state.firebase.data.event_chat[pathId])
    }
}

const mapDispatchToProps = {
    goingToEvent,
    cancelGoingToEvent,
    addEventComment
}

export default compose(
    withFirestore,
    connect(mapStateToProp, mapDispatchToProps),
    firebaseConnect([`event_chat/${pathId}`])
)(EventDetailPage);
