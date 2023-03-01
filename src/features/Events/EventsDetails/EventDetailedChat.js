import React, { Component, Fragment } from 'react';
import { Avatar, Box, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import moment from 'moment';
import EventDetailedChatForm from './EventDetailedChatForm';


class EventDetailedChat extends Component {
    state = {
        showReplyField: false,
        selectedComment: null
    }
    handleInitReplyField = (id) => () => {
        this.setState({
            showReplyField: true,
            selectedComment: id
        })
    }
    handleCloseReplyField = () => {
        this.setState({
            showReplyField: false,
            selectedComment: null
        })
    }
    render() {
        const { eventId, addEventComment, eventChat } = this.props;
        const { showReplyField, selectedComment } = this.state;
        return (
            <Paper>
                <Box sx={{ textAlign: 'center', p: 1, backgroundColor: '#182848', color: '#fff' }}>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Chat about this event</Typography>
                </Box>
                {/* Comment Section */}
                <Box sx={{ p: 1.5 }}>
                    {eventChat && eventChat.map(value => {
                        return <Fragment key={value.id}>
                            <Grid container spacing={1} sx={{ margin: '2px 0' }} key={value.id}>
                                <Grid item>
                                    <Avatar src={value.photoURL} alt={value.displayName} />
                                </Grid>
                                <Grid item>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Typography variant='body1' sx={{ fontWeight: 600 }}>{value.displayName}</Typography>
                                        <Typography variant='body2' sx={{ color: '#aaa' }}>{moment(value.date).fromNow()}</Typography>
                                    </Stack>
                                    <Typography variant='subtitle1'>{value.comment}</Typography>
                                    <Link color='#aaa' underline='hover' onClick={this.handleInitReplyField(value.id)}>Reply</Link>
                                    {showReplyField && selectedComment === value.id && (
                                        <EventDetailedChatForm
                                            addEventComment={addEventComment}
                                            eventId={eventId}
                                            form={`reply_${value.id}`}
                                            handleCloseReplyField={this.handleCloseReplyField}
                                            parentId={value.id}
                                        />)}
                                </Grid>
                            </Grid>
                            {value.childNodes && value.childNodes.map((child) => (
                                <Grid container spacing={1} sx={{ margin: '2px 0', marginLeft: '2.5rem' }} key={child.id}>
                                    <Grid item>
                                        <Avatar src={child.photoURL} alt={child.displayName} />
                                    </Grid>
                                    <Grid item>
                                        <Stack direction='row' alignItems='center' spacing={1}>
                                            <Typography variant='body1' sx={{ fontWeight: 600 }}>{child.displayName}</Typography>
                                            <Typography variant='body2' sx={{ color: '#aaa' }}>{moment(child.date).fromNow()}</Typography>
                                        </Stack>
                                        <Typography variant='subtitle1'>{child.comment}</Typography>
                                        <Link color='#aaa' underline='hover' onClick={this.handleInitReplyField(child.id)}>Reply</Link>
                                        {showReplyField && selectedComment === child.id && (
                                            <EventDetailedChatForm
                                                addEventComment={addEventComment}
                                                eventId={eventId}
                                                form={`reply_${child.id}`}
                                                handleCloseReplyField={this.handleCloseReplyField}
                                                parentId={child.id}
                                            />)}
                                    </Grid>
                                </Grid>
                            ))}
                        </Fragment>
                    })}
                    <EventDetailedChatForm addEventComment={addEventComment} eventId={eventId} form={'newComment'} parentId={0} />
                </Box>
            </Paper>
        )
    }
}


export default EventDetailedChat;