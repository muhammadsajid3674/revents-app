import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, withFirestore } from 'react-redux-firebase'
import { objectToArray } from '../../../config/common/HelperMethods/objectToArray'
import EventDetailedChat from './EventDetailedChat'
import { EventDetailedHeader } from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import { goingToEvent, cancelGoingToEvent } from '../../user/userAction'
import { addEventComment } from '../EventActions'
import { compose } from 'redux'
import { createDataTree } from '../../../config/common/HelperMethods/createDataTree'
import { withRouter } from '../../../config/common/util/withRouter'

class EventDetailPage extends Component {

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
        const chatTree = !isEmpty(eventChat) && createDataTree(eventChat);
        return (
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Stack spacing={2}>
                        <EventDetailedHeader event={event} isHost={isHost} isGoing={isGoing} goingToEvent={goingToEvent} cancelGoingToEvent={cancelGoingToEvent} />
                        <EventDetailedInfo event={event} />
                        <EventDetailedChat addEventComment={addEventComment} eventId={event.id} eventChat={chatTree} />
                    </Stack>
                </Grid>
                <Grid item md={4}>
                    <EventDetailedSidebar attendees={attendees} />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProp = (state, ownProps) => {

    let event = {};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0) {
        event = state.firestore.ordered.events.filter(event => event.id === ownProps.params.id)[0] || {}
    }

    return {
        event,
        auth: state.firebase.auth,
        eventChat: !isEmpty(state.firebase.data.event_chat) && objectToArray(state.firebase.data.event_chat[ownProps.params.id])
    }
}

const mapDispatchToProps = {
    goingToEvent,
    cancelGoingToEvent,
    addEventComment
}

export default compose(
    withRouter,
    withFirestore,
    connect(mapStateToProp, mapDispatchToProps),
    firebaseConnect((props) => ([`event_chat/${props.params.id}`]))
)(EventDetailPage);
