import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

const EventActivity = () => {
    return (
        <Paper>
            <Box sx={{ p: 1 }}>
                <Typography variant="h6">Recent Activity</Typography>
            </Box>
            <Divider/>
            <Box sx={{ p: 1 }}>
                <Typography variant="subtitle2">Recent Activity</Typography>
            </Box>
        </Paper>
    )
}

export default EventActivity