import { Stack } from '@mui/material'
import React, { Component } from 'react'
import EventListItems from './EventListItems'

export default class EventList extends Component {
    render() {
        return (
            <Stack spacing={2}>
                {this.props.events.map((elem, index) => {
                   return <EventListItems key={index} event={elem} selectEvent={this.props.selectEvent} deleteEvent={this.props.deleteEvent} />
                })}
            </Stack>
        )
    }
}
