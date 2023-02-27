import React, { Component } from 'react';
import { Box, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import moment from 'moment';
import EventDetailedChatForm from './EventDetailedChatForm';


class EventDetailedChat extends Component {
    state = {
        showReplyField: false,
        selectedComment: null
    }
    handleReplyField = () => {
        this.setState({
            showReplyField: true
        })
    }
    render() {
        const { eventId, addEventComment, eventChat } = this.props;
        return (
            <Paper>
                <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#182848', color: '#fff' }}>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Chat about this event</Typography>
                </Box>
                {/* Comment Section */}
                <Box sx={{ p: 1.5 }}>
                    {eventChat && eventChat.map(value => {
                        return <Grid container spacing={1} sx={{ margin: '2px 0' }} key={value.id}>
                            <Grid item md={1} xs={1}>
                                <img src={value.photoURL} style={{ width: '100%', minHeight: 'auto' }} alt='' />
                            </Grid>
                            <Grid item md={11}>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography variant='body1' sx={{ fontWeight: 600 }}>{value.displayName}</Typography>
                                    <Typography variant='body2' sx={{ color: '#aaa' }}>{moment(value.date).fromNow()}</Typography>
                                </Stack>
                                <Typography variant='subtitle1'>{value.comment}</Typography>
                                {!this.state.showReplyField ?
                                    <Link color='#aaa' underline='hover' onClick={this.handleReplyField}>Reply</Link>
                                    :
                                    <EventDetailedChatForm addEventComment={addEventComment} eventId={eventId} />
                                }
                            </Grid>
                        </Grid>
                    })}
                    <EventDetailedChatForm addEventComment={addEventComment} eventId={eventId} />
                </Box>
            </Paper>
        )
    }
}


export default EventDetailedChat;