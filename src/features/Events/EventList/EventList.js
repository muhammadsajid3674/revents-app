import { Stack } from '@mui/material'
import React, { Component, Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import EventListItems from './EventListItems'

export default class EventList extends Component {
    render() {
        const { events, nextEvent, isLoading, moreEvents } = this.props;
        return (
        <Fragment>
            {events && events.length !== 0 &&
                <InfiniteScroll
                pageStart={0}
                loadMore={nextEvent}
                hasMore={!isLoading && moreEvents}
                initialLoad={false}
                >
                    <Stack spacing={2}>
                        {events && events.map((elem, index) => {
                            return <EventListItems key={index} event={elem} />
                        })}
                    </Stack>
                </InfiniteScroll>
            }
        </Fragment>
        )
    }
}
