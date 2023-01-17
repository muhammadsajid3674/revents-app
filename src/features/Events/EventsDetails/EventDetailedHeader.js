import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'

export const EventDetailedHeader = () => {
    return (
        <Paper>
            <Box className='eventDetailedHeader'>
                <Stack sx={{ color: '#fff' }}>
                    <Typography variant='h3'>Event Title</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Event Date</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Hosted By</Typography>
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
                    <ThemeBtnPri label='Manage Event' color="themeOrange" />
                </Box>
            </Box>
        </Paper>
    )
}
