import { Avatar } from '@mui/material'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class EventListAttendee extends Component {
    render() {
        const { attendee } = this.props
        return (
            <Fragment>
                <Link to={`/profile/${attendee.id}`}>
                    <Avatar src={attendee.photoURL} sx={{ width: 50, height: 50 }} />
                </Link>
            </Fragment>
        )
    }
}
