import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'


export const EventDetailedHeader = ({ event }) => {

    const navigate = useNavigate()

    let eventDate, eventTime, eventDay;
    if (event.date) {
        let formatDate = event.date.toDate();
        eventDate = moment(formatDate).format('DD MMM YYYY');
        eventTime = moment(formatDate).format('hh:mm a');
        eventDay = moment(formatDate).format('dddd');
    }

    let bgImage;
    if (event.category) {
        bgImage = require(`../../../assets/categoryImages/${event.category}.jpg`)
    }

    return (
        <Paper>
            <Box className='eventDetailedHeader' sx={{ backgroundImage: `url(${bgImage})` }}>
                <Stack sx={{ color: '#fff' }}>
                    <Typography variant='h3'>{event.title}</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>{eventDay} {eventDate} at {eventTime}</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Hosted By <Link>{event.hostedBy}</Link></Typography>
                </Stack>
            </Box>
            <Box sx={{ p: 1.5, display: 'flex', gap: 1 }}>
                <Box>
                    <ThemeBtnPri label='Cancel My Plane' color="themeGrey" />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <ThemeBtnPri label='JOIN MY EVENT' />
                </Box>
                <Box>
                    <ThemeBtnPri onClick={() => { navigate(`/manage/${event.id}`) }} label='Manage Event' color="themeOrange" />
                </Box>
            </Box>
        </Paper >
    )
}
