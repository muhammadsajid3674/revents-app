import { Avatar } from '@mui/material'
import React, { Component, Fragment } from 'react'

export default class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props
        return (
            <Fragment>
                <Avatar src={attendee.photoUrl} sx={{ width: 50, height: 50 }} />
            </Fragment>
        )
    }
}
