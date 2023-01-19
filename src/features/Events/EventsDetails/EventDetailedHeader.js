import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'

export const EventDetailedHeader = ({ event }) => {

    // const bgImgUrl = `../../../assets/categoryImages/${event.category}.jpg`;

    const navigate = useNavigate()

    return (
        <Paper>
            <Box className='eventDetailedHeader' sx={{
                // backgroundImage: `url(${bgImgUrl})`,
                // backgroundSize: 'cover',
                // backgroundrepeat: 'no-repeat',
            }}>
                <Stack sx={{ color: '#fff' }}>
                    <Typography variant='h3'>{event.title}</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>{event.date}</Typography>
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
                    <ThemeBtnPri onClick={() => {navigate(`/manage/${event.id}`)}} label='Manage Event' color="themeOrange" />
                </Box>
            </Box>
        </Paper >
    )
}
